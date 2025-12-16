import { Module } from '@nestjs/common';
import { BalanceEventsService } from './balance_events.service';
import { BalanceEventsController } from './balance_events.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyModule } from '../company/company.module';
import { BalanceEventsRepository } from './balance_events.repository';
import { PrismaBalanceEventsRepository } from './prisma-balance_events.repository';

@Module({
    imports: [CompanyModule],
    controllers: [BalanceEventsController],
    providers: [
        PrismaService,
        BalanceEventsService,
        { provide: BalanceEventsRepository, useClass: PrismaBalanceEventsRepository },
    ],
})
export class BalanceEventsModule { }
