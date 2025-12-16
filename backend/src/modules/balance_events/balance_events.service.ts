import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { BalanceEvent, Prisma } from '@prisma/client';
import { CreateBalanceEventDto } from './dto/create-balance_event.dto';
import { UpdateBalanceEventDto } from './dto/update-balance_event.dto';
import { BalanceEventsRepository } from './balance_events.repository';
import { CompanyRepository } from '../company/company.repository';

@Injectable()
export class BalanceEventsService {
    constructor(
        private readonly balanceEventsRepository: BalanceEventsRepository,
        private readonly companyRepository: CompanyRepository,
    ) { }

    async create(userId: string, dto: CreateBalanceEventDto): Promise<BalanceEvent> {
        const company = await this.companyRepository.findByUserId(userId);
        if (!company) throw new NotFoundException('Company not found for this user');

        const event = await this.balanceEventsRepository.create({
            ...dto,
            companyId: company.id,
        });

        // Update company balance
        const balanceChange = this.calculateBalanceChange(dto.type, dto.amount);
        const newBalance = new Prisma.Decimal(company.balance.toNumber() + balanceChange);
        await this.companyRepository.update(company.id, { balance: newBalance });

        return event;
    }

    async findAllForCompany(userId: string): Promise<BalanceEvent[]> {
        const company = await this.companyRepository.findByUserId(userId);
        if (!company) throw new NotFoundException('Company not found for this user');
        return this.balanceEventsRepository.findByCompanyId(company.id);
    }

    async findOne(userId: string, id: string): Promise<BalanceEvent> {
        const company = await this.companyRepository.findByUserId(userId);
        if (!company) throw new NotFoundException('Company not found for this user');

        const event = await this.balanceEventsRepository.findById(id);
        if (!event) throw new NotFoundException('Balance event not found');
        if (event.companyId !== company.id) throw new BadRequestException('Balance event does not belong to your company');
        return event;
    }

    async update(userId: string, id: string, dto: UpdateBalanceEventDto): Promise<BalanceEvent> {
        const company = await this.companyRepository.findByUserId(userId);
        if (!company) throw new NotFoundException('Company not found for this user');

        const event = await this.balanceEventsRepository.findById(id);
        if (!event) throw new NotFoundException('Balance event not found');
        if (event.companyId !== company.id) throw new BadRequestException('Balance event does not belong to your company');

        // If amount or type changed, recalculate balance
        if (dto.amount !== undefined || dto.type !== undefined) {
            const oldBalanceChange = this.calculateBalanceChange(event.type, event.amount.toNumber());
            const newType = dto.type ?? event.type;
            const newAmount = dto.amount ?? event.amount.toNumber();
            const newBalanceChange = this.calculateBalanceChange(newType, newAmount);

            const balanceAdjustment = newBalanceChange - oldBalanceChange;
            const newBalance = new Prisma.Decimal(company.balance.toNumber() + balanceAdjustment);
            await this.companyRepository.update(company.id, { balance: newBalance });
        }

        // Prevent changing companyId through update
        const { companyId, ...data } = dto as any;
        return this.balanceEventsRepository.update(id, data as UpdateBalanceEventDto);
    }

    async remove(userId: string, id: string): Promise<{ message: string }> {
        const company = await this.companyRepository.findByUserId(userId);
        if (!company) throw new NotFoundException('Company not found for this user');

        const event = await this.balanceEventsRepository.findById(id);
        if (!event) throw new NotFoundException('Balance event not found');
        if (event.companyId !== company.id) throw new BadRequestException('Balance event does not belong to your company');

        // Reverse the balance change
        const balanceChange = this.calculateBalanceChange(event.type, event.amount.toNumber());
        const newBalance = new Prisma.Decimal(company.balance.toNumber() - balanceChange);
        await this.companyRepository.update(company.id, { balance: newBalance });

        await this.balanceEventsRepository.delete(id);
        return { message: 'Balance event deleted successfully' };
    }

    private calculateBalanceChange(type: string, amount: number): number {
        // Income types (FREIGHT_INCOME, ASSET_SALE, OTHER_INCOME) add to balance
        const incomeTypes = ['FREIGHT_INCOME', 'ASSET_SALE', 'OTHER_INCOME'];
        // Expense types subtract from balance
        const expenseTypes = ['VEHICLE_MAINTENANCE', 'FUEL', 'FOOD', 'TOLL', 'INSURANCE', 'TAX', 'SALARY', 'MARKETING', 'SOFTWARE', 'UTILITIES', 'OTHER_EXPENSE'];

        if (incomeTypes.includes(type)) {
            return amount;
        } else if (expenseTypes.includes(type)) {
            return -amount;
        }
        return 0;
    }
}
