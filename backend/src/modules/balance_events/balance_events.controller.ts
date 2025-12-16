import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { BalanceEventsService } from './balance_events.service';
import { CreateBalanceEventDto } from './dto/create-balance_event.dto';
import { UpdateBalanceEventDto } from './dto/update-balance_event.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Balance Events')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('balance-events')
export class BalanceEventsController {
    constructor(private readonly balanceEventsService: BalanceEventsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new balance event' })
    @ApiResponse({ status: 201, description: 'Balance event created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 404, description: 'Company not found' })
    create(@CurrentUser() user: User, @Body() dto: CreateBalanceEventDto) {
        return this.balanceEventsService.create(user.id, dto);
    }

    @Get('company')
    @ApiOperation({ summary: 'Get all balance events for current user company' })
    @ApiResponse({ status: 200, description: 'Balance events retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Company not found' })
    findAllForCompany(@CurrentUser() user: User) {
        return this.balanceEventsService.findAllForCompany(user.id);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a specific balance event by ID' })
    @ApiResponse({ status: 200, description: 'Balance event retrieved successfully' })
    @ApiResponse({ status: 404, description: 'Balance event not found' })
    findOne(@CurrentUser() user: User, @Param('id') id: string) {
        return this.balanceEventsService.findOne(user.id, id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a balance event' })
    @ApiResponse({ status: 200, description: 'Balance event updated successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 404, description: 'Balance event not found' })
    update(@CurrentUser() user: User, @Param('id') id: string, @Body() dto: UpdateBalanceEventDto) {
        return this.balanceEventsService.update(user.id, id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a balance event' })
    @ApiResponse({ status: 200, description: 'Balance event deleted successfully' })
    @ApiResponse({ status: 404, description: 'Balance event not found' })
    remove(@CurrentUser() user: User, @Param('id') id: string) {
        return this.balanceEventsService.remove(user.id, id);
    }
}
