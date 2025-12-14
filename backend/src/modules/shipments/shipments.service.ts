import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { ShipmentsRepository } from './shipments.repository';
import { CompanyRepository } from '../company/company.repository';
import { TrucksRepository } from '../truck/trucks.repository';
import { EmployeesRepository } from '../employees/employees.repository';
import { RecipientsRepository } from '../recipients/recipients.repository';
import { Shipment } from '@prisma/client';

@Injectable()
export class ShipmentsService {
  constructor(
    private readonly shipmentsRepository: ShipmentsRepository,
    private readonly trucksRepository: TrucksRepository,
    private readonly companyRepository: CompanyRepository,
    private readonly employeeRepository: EmployeesRepository,
    private readonly recipientRepository: RecipientsRepository,
  ) { }

  async createForUserCompany(userId: string, createShipmentDto: CreateShipmentDto): Promise<Shipment> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }


    const [employee, truck, recipient] = await Promise.all([
      this.employeeRepository.findById(createShipmentDto.employeeId),
      this.trucksRepository.findById(createShipmentDto.truckId),
      this.recipientRepository.findById(createShipmentDto.recipientId),
    ]);

    if (!employee) {
      throw new BadRequestException('Employee not found');
    }
    if (!truck) {
      throw new BadRequestException('Truck not found');
    }
    if (!recipient) {
      throw new BadRequestException('Recipient not found');
    }

    return this.shipmentsRepository.createForCompany(company.id, createShipmentDto);
  }

  async findAllForUserCompany(userId: string): Promise<Shipment[]> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    return this.shipmentsRepository.findAll();
  }

  async findOneForUserCompany(userId: string, id: string): Promise<Shipment> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipment = await this.shipmentsRepository.findById(id);
    if (!shipment) {
      throw new NotFoundException(`Shipment with id ${id} not found`);
    }
    return shipment;
  }

  async updateForUserCompany(userId: string, id: string, updateShipmentDto: UpdateShipmentDto): Promise<Shipment> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    // Validate that shipment exists
    const shipment = await this.shipmentsRepository.findById(id);
    if (!shipment) {
      throw new NotFoundException(`Shipment with id ${id} not found`);
    }

    // Validate related entities if they are provided in the update
    if (updateShipmentDto.employeeId) {
      const employee = await this.employeeRepository.findById(updateShipmentDto.employeeId);
      if (!employee) {
        throw new BadRequestException('Employee not found');
      }
    }

    if (updateShipmentDto.truckId) {
      const truck = await this.trucksRepository.findById(updateShipmentDto.truckId);
      if (!truck) {
        throw new BadRequestException('Truck not found');
      }
    }

    if (updateShipmentDto.recipientId) {
      const recipient = await this.recipientRepository.findById(updateShipmentDto.recipientId);
      if (!recipient) {
        throw new BadRequestException('Recipient not found');
      }
    }

    return this.shipmentsRepository.update(id, updateShipmentDto);
  }

  async deleteForUserCompany(userId: string, id: string): Promise<Shipment> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    // Validate that shipment exists
    const shipment = await this.shipmentsRepository.findById(id);
    if (!shipment) {
      throw new NotFoundException(`Shipment with id ${id} not found`);
    }

    return this.shipmentsRepository.delete(id);
  }
}
