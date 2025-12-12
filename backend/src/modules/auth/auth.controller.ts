import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerUserDto } from './dto/register.dto';
import { loginUserDto } from './dto/login.dto';
import { Public } from './public.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Public()
  @Post('register')
  async register(@Body() data: registerUserDto) {
    return this.authService.register(data);
  }


  @Public()
  @Post('login')
  async login(@Body() data: loginUserDto) {
    return this.authService.login(data);
  }

  @Post('logout')
  async logout() {
    return this.authService.logout();
  }
}
