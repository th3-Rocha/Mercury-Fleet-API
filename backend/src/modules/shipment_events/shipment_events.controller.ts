import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShipmentEventsService } from './shipment_events.service';
import { CreateShipmentEventDto } from './dto/create-shipment_event.dto';
import { UpdateShipmentEventDto } from './dto/update-shipment_event.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('shipment-events')
export class ShipmentEventsController {
  constructor(private readonly shipmentEventsService: ShipmentEventsService) { }

  @Post()
  create(@CurrentUser() user: User, @Body() createShipmentEventDto: CreateShipmentEventDto) {
    return this.shipmentEventsService.create(user.id, createShipmentEventDto);
  }

  @Get('shipment/:shipmentId')
  findAllByShipment(@CurrentUser() user: User, @Param('shipmentId') shipmentId: string) {
    return this.shipmentEventsService.findAllByShipment(user.id, shipmentId);
  }

  @Get(':id')
  findOne(@CurrentUser() user: User, @Param('id') id: string) {
    return this.shipmentEventsService.findOne(user.id, id);
  }

  @Patch(':id')
  update(@CurrentUser() user: User, @Param('id') id: string, @Body() updateShipmentEventDto: UpdateShipmentEventDto) {
    return this.shipmentEventsService.update(user.id, id, updateShipmentEventDto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: User, @Param('id') id: string) {
    return this.shipmentEventsService.remove(user.id, id);
  }
}
