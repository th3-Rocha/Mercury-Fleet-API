import { Module } from '@nestjs/common';
import { ShipmentEventsService } from './shipment_events.service';
import { ShipmentEventsController } from './shipment_events.controller';
import { ShipmentsEventsRepository } from './shipment_events.repository';
import { PrismaShipmentsEventsRepository } from './prisma-shipments_events.repository';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyModule } from '../company/company.module';
import { ShipmentsModule } from '../shipments/shipments.module';

@Module({
  imports: [DatabaseModule, CompanyModule, ShipmentsModule],
  controllers: [ShipmentEventsController],
  providers: [
    ShipmentEventsService,
    {
      provide: ShipmentsEventsRepository,
      useClass: PrismaShipmentsEventsRepository,
    },
  ],
  exports: [ShipmentsEventsRepository],
})
export class ShipmentEventsModule { }
