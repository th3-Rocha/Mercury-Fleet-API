import { PickType } from '@nestjs/swagger';
import { registerUserDto } from './register.dto';

export class loginUserDto extends PickType(registerUserDto, ['email', 'password'] as const) { }