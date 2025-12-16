import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { TruckService } from './truck.service';
import { CreateTruckDto } from './dto/create-truck.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { UpdateTruckDto } from './dto/update-truck.dto';

@Controller('trucks')
@UseGuards(JwtAuthGuard)
export class TruckController {
    constructor(private readonly truckService: TruckService) { }

    @Post()
    create(@CurrentUser() user: User, @Body() createTruckDto: CreateTruckDto) {
        return this.truckService.createForUserCompany(user.id, createTruckDto);
    }

    @Get()
    findAll(@CurrentUser() user: User) {
        return this.truckService.findAllForUserCompany(user.id);
    }

    @Get(':id')
    findOne(@CurrentUser() user: User, @Param('id') id: string) {
        return this.truckService.findOneForUserCompany(user.id, id);
    }

    @Patch(':id')
    update(
        @CurrentUser() user: User,
        @Param('id') id: string,
        @Body() updateTruckDto: UpdateTruckDto,
    ) {
        return this.truckService.updateForUserCompany(user.id, id, updateTruckDto);
    }

    @Delete(':id')
    delete(@CurrentUser() user: User, @Param('id') id: string) {
        return this.truckService.deleteForUserCompany(user.id, id);
    }
}
