import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Company } from '@prisma/client';
import { CompanyRepository } from './company.repository';

@Injectable()
export class PrismaCompanyRepository implements CompanyRepository {
  constructor(private prisma: PrismaService) { }

  async findByUserId(userId: string): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { userId },
    });
  }

  async findByTaxId(taxId: string): Promise<Company | null> {
    return this.prisma.company.findUnique({
      where: { taxId },
    });
  }

  async update(id: string, data: Partial<Company>): Promise<Company> {
    return this.prisma.company.update({
      where: { id },
      data,
    });
  }

  async updateByUserId(userId: string, data: Partial<Company>): Promise<Company> {
    return this.prisma.company.update({
      where: { userId },
      data,
    });
  }
}

