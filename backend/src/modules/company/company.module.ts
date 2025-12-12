import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { PrismaCompanyRepository } from './prisma-company.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    CompanyService,
    {
      provide: CompanyRepository,
      useClass: PrismaCompanyRepository,
    },
  ],
  exports: [CompanyRepository],
})
export class CompanyModule { }
