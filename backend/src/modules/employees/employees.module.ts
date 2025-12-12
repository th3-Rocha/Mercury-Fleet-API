import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { PrismaEmployeesRepository } from './prisma-employees.repository';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [DatabaseModule, CompanyModule],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    {
      provide: EmployeesRepository,
      useClass: PrismaEmployeesRepository,
    },
  ],
})
export class EmployeesModule { }
