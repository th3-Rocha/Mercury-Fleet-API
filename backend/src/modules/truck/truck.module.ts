import { Module } from '@nestjs/common';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { TrucksRepository } from './trucks.repository';
import { PrismaTrucksRepository } from './prisma-trucks.repository';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyModule } from '../company/company.module';

@Module({
    imports: [DatabaseModule, CompanyModule],
    controllers: [TruckController],
    providers: [
        TruckService,
        {
            provide: TrucksRepository,
            useClass: PrismaTrucksRepository,
        },
    ],
    exports: [TrucksRepository],
})
export class TruckModule { }
