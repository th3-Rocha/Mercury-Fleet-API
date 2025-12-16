import { ConflictException, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { registerUserDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { loginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ) { }

    async register(data: registerUserDto): Promise<{
        access_token: string;
        user: { id: string; email: string; name: string };
    }> {
        const Userexist = await this.usersRepository.findByEmail(
            data.email,
        );
        if (Userexist) {
            throw new ConflictException('User with this email already exists');
        }
        const hashPassword = await bcrypt.hash(data.password, 10);

        const userCreated = await this.usersRepository.create({
            ...data,
            password: hashPassword,
        });

        const payload = { sub: userCreated.id, username: userCreated.email };
        const token = await this.jwtService.signAsync(payload);
        return {
            access_token: token,
            user: { id: userCreated.id, email: userCreated.email, name: userCreated.name }

        };
    }


    async login(data: loginUserDto): Promise<any> {
        const user = await this.usersRepository.findByEmail(data.email);
        if (user && await bcrypt.compare(data.password, user.password)) {
            const { password, ...result } = user;
            const payload = { sub: user.id, username: user.email };
            const token = await this.jwtService.signAsync(payload);
            return {
                access_token: token,
                user: result,
            };
        }
        throw new UnauthorizedException('Invalid credentials');
    }



    async logout(): Promise<{ message: string }> {
        
        return { message: 'Logout successful' };
    }

    async validateToken(userId: string): Promise<{ valid: boolean; user: { id: string; email: string; name: string } }> {
        const user = await this.usersRepository.findById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return {
            valid: true,
            user: { id: user.id, email: user.email, name: user.name },
        };
    }

}