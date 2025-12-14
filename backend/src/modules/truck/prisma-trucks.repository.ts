import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Truck } from '@prisma/client';
import { TrucksRepository } from './trucks.repository';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';

@Injectable()
export class PrismaTrucksRepository implements TrucksRepository {
    constructor(private prisma: PrismaService) { }

    async createForCompany(companyId: string, data: CreateTruckDto): Promise<Truck> {
        return this.prisma.truck.create({
            data: {
                companyId,
                licensePlate: data.licensePlate,
                maxPayload: data.maxPayload,
            },
        });
    }

    async findById(id: string): Promise<Truck | null> {
        return this.prisma.truck.findUnique({ where: { id } });
    }

    async findByPlate(licensePlate: string): Promise<Truck | null> {
        return this.prisma.truck.findUnique({ where: { licensePlate } });
    }

    async update(id: string, data: UpdateTruckDto): Promise<Truck> {
        return this.prisma.truck.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<Truck> {
        return this.prisma.truck.delete({ where: { id } });
    }
    async findAllByCompanyId(companyId: string): Promise<Truck[]> {
        return this.prisma.truck.findMany({ where: { companyId } });
    }
}
