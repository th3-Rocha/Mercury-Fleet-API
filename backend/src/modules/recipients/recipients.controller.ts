import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { RecipientsService } from './recipients.service';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('recipients')
@UseGuards(JwtAuthGuard)
export class RecipientsController {
  constructor(private readonly recipientsService: RecipientsService) { }

  @Post()
  create(@CurrentUser() user: User, @Body() createRecipientDto: CreateRecipientDto) {
    return this.recipientsService.createForUserCompany(user.id, createRecipientDto);
  }

  @Get()
  findAll(@CurrentUser() user: User) {
    return this.recipientsService.findAllForUserCompany(user.id);
  }

  @Get(':id')
  findOne(@CurrentUser() user: User, @Param('id') id: string) {
    return this.recipientsService.findOneForUserCompany(user.id, id);
  }

  @Put(':id')
  update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() updateRecipientDto: UpdateRecipientDto,
  ) {
    return this.recipientsService.updateForUserCompany(user.id, id, updateRecipientDto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: User, @Param('id') id: string) {
    return this.recipientsService.deleteForUserCompany(user.id, id);
  }
}
