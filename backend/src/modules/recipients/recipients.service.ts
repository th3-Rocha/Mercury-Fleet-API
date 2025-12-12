import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { RecipientsRepository } from './recipients.repository';
import { CompanyRepository } from '../company/company.repository';

@Injectable()
export class RecipientsService {
  constructor(
    private readonly recipientsRepository: RecipientsRepository,
    private readonly companyRepository: CompanyRepository,
  ) { }

  async createForUserCompany(userId: string, createRecipientDto: CreateRecipientDto) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const existingEmail = await this.recipientsRepository.findByEmail(createRecipientDto.email);
    if (existingEmail) {
      throw new BadRequestException('A recipient with this email already exists');
    }

    return this.recipientsRepository.createForCompany(company.id, createRecipientDto);
  }

  async findAllForUserCompany(userId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    return this.recipientsRepository.findByCompanyId(company.id);
  }

  async findOneForUserCompany(userId: string, recipientId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const recipient = await this.recipientsRepository.findById(recipientId);

    if (!recipient || recipient.companyId !== company.id) {
      throw new NotFoundException('Recipient not found for this company');
    }

    return recipient;
  }

  async updateForUserCompany(
    userId: string,
    recipientId: string,
    updateRecipientDto: UpdateRecipientDto,
  ) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const recipient = await this.recipientsRepository.findById(recipientId);

    if (!recipient || recipient.companyId !== company.id) {
      throw new NotFoundException('Recipient not found for this company');
    }

    if (updateRecipientDto.email && updateRecipientDto.email !== recipient.email) {
      const existingEmail = await this.recipientsRepository.findByEmail(updateRecipientDto.email);
      if (existingEmail) {
        throw new BadRequestException('A recipient with this email already exists');
      }
    }

    return this.recipientsRepository.update(recipientId, updateRecipientDto);
  }

  async deleteForUserCompany(userId: string, recipientId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const recipient = await this.recipientsRepository.findById(recipientId);

    if (!recipient || recipient.companyId !== company.id) {
      throw new NotFoundException('Recipient not found for this company');
    }

    await this.recipientsRepository.delete(recipientId);
    return { message: 'Recipient deleted successfully' };
  }
}
