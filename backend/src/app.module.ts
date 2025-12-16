import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core/constants';
import { CompanyModule } from './modules/company/company.module';
import { TruckModule } from './modules/truck/truck.module';
import { RecipientsModule } from './modules/recipients/recipients.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ShipmentEventsModule } from './modules/shipment_events/shipment_events.module';
import { BalanceEventsModule } from './modules/balance_events/balance_events.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    HealthModule,
    UsersModule,
    AuthModule,
    CompanyModule,
    TruckModule,
    RecipientsModule,
    EmployeesModule,
    ShipmentsModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100
      }
    ]),
    ShipmentEventsModule,
    BalanceEventsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
