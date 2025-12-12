import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Recipient } from '@prisma/client';
import { RecipientsRepository } from './recipients.repository';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';

@Injectable()
export class PrismaRecipientsRepository implements RecipientsRepository {
  constructor(private prisma: PrismaService) { }

  async createForCompany(companyId: string, data: CreateRecipientDto): Promise<Recipient> {
    return this.prisma.recipient.create({
      data: {
        companyId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        fullAddress: data.fullAddress,
      },
    });
  }

  async findById(id: string): Promise<Recipient | null> {
    return this.prisma.recipient.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<Recipient | null> {
    return this.prisma.recipient.findUnique({ where: { email } });
  }

  async findByCompanyId(companyId: string): Promise<Recipient[]> {
    return this.prisma.recipient.findMany({ where: { companyId } });
  }

  async update(id: string, data: UpdateRecipientDto): Promise<Recipient> {
    return this.prisma.recipient.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Recipient> {
    return this.prisma.recipient.delete({ where: { id } });
  }
}

