import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from '@prisma/client';

import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    const created = await this.usersRepository.create({
      ...createUserDto,
      password: hashPassword,
    });

    return this.sanitizeUser(created);
  }

  findAll() {
    return `this route wil not be implemented`;
  }


  private sanitizeUser(user: User) {
    const { password, ...safe } = user;
    return safe;
  }


  async findById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      return null;
    }
    return this.sanitizeUser(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.usersRepository.findById(id);
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    const updated = await this.usersRepository.update(id, updateUserDto);
    const { password, ...userWithoutPassword } = updated;
    return userWithoutPassword;
  }

  async remove(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const deleted = await this.usersRepository.delete(id);
    const { password, ...userWithoutPassword } = deleted;
    return userWithoutPassword;
  }
}
