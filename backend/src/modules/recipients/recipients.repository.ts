import { Recipient } from '@prisma/client';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';

export abstract class RecipientsRepository {
    abstract createForCompany(companyId: string, data: CreateRecipientDto): Promise<Recipient>;
    abstract findById(id: string): Promise<Recipient | null>;
    abstract findByEmail(email: string): Promise<Recipient | null>;
    abstract findByCompanyId(companyId: string): Promise<Recipient[]>;
    abstract update(id: string, data: UpdateRecipientDto): Promise<Recipient>;
    abstract delete(id: string): Promise<Recipient>;
}
