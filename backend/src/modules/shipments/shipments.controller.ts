import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('shipments')
@UseGuards(JwtAuthGuard)
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) { }

  @Post()
  create(@CurrentUser() user: User, @Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.createForUserCompany(user.id, createShipmentDto);
  }

  @Get()
  findAll(@CurrentUser() user: User) {
    return this.shipmentsService.findAllForUserCompany(user.id);
  }

  @Get(':id')
  findOne(@CurrentUser() user: User, @Param('id') id: string) {
    return this.shipmentsService.findOneForUserCompany(user.id, id);
  }

  @Put(':id')
  update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() updateShipmentDto: UpdateShipmentDto,
  ) {
    return this.shipmentsService.updateForUserCompany(user.id, id, updateShipmentDto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: User, @Param('id') id: string) {
    return this.shipmentsService.deleteForUserCompany(user.id, id);
  }
}
