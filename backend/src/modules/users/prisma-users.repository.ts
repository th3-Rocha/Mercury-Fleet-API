import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

// prisma-users.repository.ts
@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) { }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserDto): Promise<User> { //Create user with associated company
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        company: {
          create: {
            tradeName: `${data.name}'s Company`,
            legalName: `${data.name}'s Company Legal Name`,
            taxId: 'TEMP-TAX-ID',
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
        company: true
      }
    });
  }


  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        company: true
      }
    });
  }

  async delete(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
      include: {
        company: true
      }
    });
  }
}
