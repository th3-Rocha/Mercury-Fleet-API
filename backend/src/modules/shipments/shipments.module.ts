import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsController } from './shipments.controller';
import { ShipmentsRepository } from './shipments.repository';
import { PrismaShipmentsRepository } from './prisma-shipments.repository';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyModule } from '../company/company.module';
import { EmployeesModule } from '../employees/employees.module';
import { TruckModule } from '../truck/truck.module';
import { RecipientsModule } from '../recipients/recipients.module';

@Module({
  imports: [DatabaseModule, CompanyModule, EmployeesModule, TruckModule, RecipientsModule],
  controllers: [ShipmentsController],
  providers: [
    ShipmentsService,
    {
      provide: ShipmentsRepository,
      useClass: PrismaShipmentsRepository,
    },
  ],
  exports: [ShipmentsRepository],
})
export class ShipmentsModule { }
