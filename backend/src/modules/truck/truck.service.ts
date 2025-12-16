import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { TrucksRepository } from './trucks.repository';
import { CompanyRepository } from '../company/company.repository';
import { UpdateTruckDto } from './dto/update-truck.dto';

@Injectable()
export class TruckService {
    constructor(
        private readonly trucksRepository: TrucksRepository,
        private readonly companyRepository: CompanyRepository,
    ) { }

    async createForUserCompany(userId: string, createTruckDto: CreateTruckDto) {
        const company = await this.companyRepository.findByUserId(userId);

        if (!company) {
            throw new NotFoundException('Company not found for this user');
        }

        const existingTruck = await this.trucksRepository.findByPlate(createTruckDto.licensePlate);
        if (existingTruck) {
            throw new BadRequestException('A truck with this license plate already exists');
        }

        return this.trucksRepository.createForCompany(company.id, createTruckDto);
    }

    async updateForUserCompany(userId: string, truckId: string, updateTruckDto: UpdateTruckDto) {
        const company = await this.companyRepository.findByUserId(userId);

        if (!company) {
            throw new NotFoundException('Company not found for this user');
        }

        const truck = await this.trucksRepository.findById(truckId);

        if (!truck || truck.companyId !== company.id) {
            throw new NotFoundException('Truck not found for this company');
        }

        if (updateTruckDto.licensePlate && updateTruckDto.licensePlate !== truck.licensePlate) {
            const existingTruck = await this.trucksRepository.findByPlate(updateTruckDto.licensePlate);
            if (existingTruck) {
                throw new BadRequestException('A truck with this license plate already exists');
            }
        }

        return this.trucksRepository.update(truckId, updateTruckDto);
    }

    async deleteForUserCompany(userId: string, truckId: string) {
        const company = await this.companyRepository.findByUserId(userId);

        if (!company) {
            throw new NotFoundException('Company not found for this user');
        }

        const truck = await this.trucksRepository.findById(truckId);

        if (!truck || truck.companyId !== company.id) {
            throw new NotFoundException('Truck not found for this company');
        }

        try {
            await this.trucksRepository.delete(truckId);
            return { message: 'Truck deleted successfully' };
        } catch (error: any) {
            if (error.code === 'P2003') {
                throw new ConflictException('Cannot delete truck: it is being used in shipments');
            }
            throw error;
        }
    }
    async findAllForUserCompany(userId: string) {
        const company = await this.companyRepository.findByUserId(userId);

        if (!company) {
            throw new NotFoundException('Company not found for this user');
        }

        return this.trucksRepository.findAllByCompanyId(company.id);
    }
}
