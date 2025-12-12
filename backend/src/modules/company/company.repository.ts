
import { Company } from '@prisma/client';

export abstract class CompanyRepository {
  abstract findByUserId(userId: string): Promise<Company | null>;
  abstract findByTaxId(taxId: string): Promise<Company | null>;
  abstract update(id: string, data: Partial<Company>): Promise<Company>;
  abstract updateByUserId(userId: string, data: Partial<Company>): Promise<Company>;
}
