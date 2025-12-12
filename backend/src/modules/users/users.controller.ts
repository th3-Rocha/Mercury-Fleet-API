import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from '../auth/current-user.decorator';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @Get('me')
  async getMe(@CurrentUser() user: User) {
    return this.usersService.findById(user.id);
  }
  @Patch('me')
  updateMe(@CurrentUser() user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }

  @Delete('me')
  async removeMe(@CurrentUser() user: User) {
    await this.usersService.remove(user.id);
    return { success: true, message: 'User deleted successfully.' };
  }
}
