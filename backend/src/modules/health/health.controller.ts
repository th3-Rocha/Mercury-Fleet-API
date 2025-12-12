import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/public.decorator';

@Controller('health-check')
export class HealthController {
  @Public()
  @Get()
  check() {
    return {
      status: 'ok',
      message: 'Mercury Fleet API is up and running!',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
