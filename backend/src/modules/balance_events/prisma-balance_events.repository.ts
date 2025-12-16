import { Injectable } from '@nestjs/common';
import { BalanceEvent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBalanceEventDto } from './dto/create-balance_event.dto';
import { BalanceEventsRepository } from './balance_events.repository';
import { UpdateBalanceEventDto } from './dto/update-balance_event.dto';

@Injectable()
export class PrismaBalanceEventsRepository implements BalanceEventsRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateBalanceEventDto & { companyId: string }): Promise<BalanceEvent> {
        return this.prisma.balanceEvent.create({
            data: {
                amount: new Prisma.Decimal(data.amount),
                description: data.description,
                type: data.type,
                occurredAt: data.occurredAt ? new Date(data.occurredAt) : new Date(),
                companyId: data.companyId,
            },
        }) as unknown as Promise<BalanceEvent>;
    }

    async findById(id: string): Promise<BalanceEvent | null> {
        return this.prisma.balanceEvent.findUnique({ where: { id } }) as unknown as Promise<BalanceEvent | null>;
    }

    async findByCompanyId(companyId: string): Promise<BalanceEvent[]> {
        return this.prisma.balanceEvent.findMany({ where: { companyId }, orderBy: { occurredAt: 'desc' } }) as unknown as Promise<BalanceEvent[]>;
    }

    async delete(id: string): Promise<BalanceEvent> {
        return this.prisma.balanceEvent.delete({ where: { id } }) as unknown as Promise<BalanceEvent>;
    }

    async update(id: string, data: UpdateBalanceEventDto): Promise<BalanceEvent> {
        const updateData: any = { ...data };
        if (data.amount !== undefined) {
            updateData.amount = new Prisma.Decimal(data.amount);
        }
        if (data.occurredAt !== undefined) {
            updateData.occurredAt = new Date(data.occurredAt);
        }
        return this.prisma.balanceEvent.update({
            where: { id },
            data: updateData,
        }) as unknown as Promise<BalanceEvent>;
    }
}
