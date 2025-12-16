import { BalanceEvent } from '@prisma/client';
import { CreateBalanceEventDto } from './dto/create-balance_event.dto';
import { UpdateBalanceEventDto } from './dto/update-balance_event.dto';

export abstract class BalanceEventsRepository {
    abstract create(data: CreateBalanceEventDto & { companyId: string }): Promise<BalanceEvent>;
    abstract findById(id: string): Promise<BalanceEvent | null>;
    abstract findByCompanyId(companyId: string): Promise<BalanceEvent[]>;
    abstract delete(id: string): Promise<BalanceEvent>;
    abstract update(id: string, data: UpdateBalanceEventDto): Promise<BalanceEvent>;
}
