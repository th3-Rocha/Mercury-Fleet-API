import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) { }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    const uniqueTaxId = `TEMP-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        company: {
          create: {
            tradeName: `${data.name}'s Company`,
            legalName: `${data.name}'s Company Legal Name`,
            taxId: uniqueTaxId,
            supportEmail: data.email,
            mainPhone: '000-000-0000'
          }
        }
      },
      include: {
        company: true
      }
    });
  }

  async update(id: string, data: Partial<CreateUserDto>): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: data,
      include: {
        company: false
      }
    });
  }


  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        company: false
      }
    });
  }

  async delete(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
      include: {
        company: false
      }
    });
  }
}
