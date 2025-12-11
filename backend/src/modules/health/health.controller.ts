import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok', // Padrão universal para dizer que está tudo bem
      message: 'Mercury Fleet API is up and running!',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(), // Retorna os segundos que o app está rodando
    };
  }
}
