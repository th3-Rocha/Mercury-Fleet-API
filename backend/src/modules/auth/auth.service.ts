import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { registerUserDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersRepository: UsersRepository,
    ) { }

    async register(data: registerUserDto) {
        return this.usersRepository.create(data);
    }
}