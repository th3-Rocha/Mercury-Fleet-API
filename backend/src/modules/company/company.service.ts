import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) { }

  async findMine(userId: string) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    return company;
  }



  async updateMine(userId: string, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    if (updateCompanyDto.taxId && updateCompanyDto.taxId !== company.taxId) {
      const existingTaxId = await this.companyRepository.findByTaxId(updateCompanyDto.taxId);
      if (existingTaxId) {
        throw new BadRequestException('A company with this Tax ID already exists');
      }
    }

    return this.companyRepository.updateByUserId(userId, updateCompanyDto);
  }
}
