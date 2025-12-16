import { Controller, Get, Body, Patch, Param, UseGuards, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('company')
@UseGuards(JwtAuthGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Get()
  findMy(@CurrentUser() user: User) {
    return this.companyService.findMine(user.id);
  }
  @Put()
  updateMine(@CurrentUser() user: User, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.updateMine(user.id, updateCompanyDto);
  }


}
