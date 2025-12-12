import { Module } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { RecipientsController } from './recipients.controller';
import { RecipientsRepository } from './recipients.repository';
import { PrismaRecipientsRepository } from './prisma-recipients.repository';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [DatabaseModule, CompanyModule],
  controllers: [RecipientsController],
  providers: [
    RecipientsService,
    {
      provide: RecipientsRepository,
      useClass: PrismaRecipientsRepository,
    },
  ],
})
export class RecipientsModule { }
