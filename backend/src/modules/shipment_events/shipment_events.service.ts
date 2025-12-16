import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateShipmentEventDto } from './dto/create-shipment_event.dto';
import { UpdateShipmentEventDto } from './dto/update-shipment_event.dto';
import { ShipmentEvent } from '@prisma/client';
import { ShipmentsEventsRepository } from './shipment_events.repository';
import { ShipmentsRepository } from '../shipments/shipments.repository';
import { CompanyRepository } from '../company/company.repository';

@Injectable()
export class ShipmentEventsService {
  constructor(
    private readonly shipmentEventsRepository: ShipmentsEventsRepository,
    private readonly shipmentsRepository: ShipmentsRepository,
    private readonly companyRepository: CompanyRepository,
  ) { }

  async create(userId: string, createShipmentEventDto: CreateShipmentEventDto): Promise<ShipmentEvent> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipment = await this.shipmentsRepository.findById(createShipmentEventDto.shipmentId);
    if (!shipment) {
      throw new BadRequestException('Shipment not found');
    }

    if (shipment.companyId !== company.id) {
      throw new BadRequestException('Shipment does not belong to your company');
    }

    return this.shipmentEventsRepository.create(createShipmentEventDto);
  }

  async findAllByShipment(userId: string, shipmentId: string): Promise<ShipmentEvent[]> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipment = await this.shipmentsRepository.findById(shipmentId);
    if (!shipment) {
      throw new NotFoundException('Shipment not found');
    }

    if (shipment.companyId !== company.id) {
      throw new BadRequestException('Shipment does not belong to your company');
    }

    return this.shipmentEventsRepository.findByShipmentEventId(shipmentId);
  }

  async findOne(userId: string, id: string): Promise<ShipmentEvent> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipmentEvent = await this.shipmentEventsRepository.findById(id);
    if (!shipmentEvent) {
      throw new NotFoundException('Shipment event not found');
    }

    // Verify that the shipment belongs to the company
    const shipment = await this.shipmentsRepository.findById(shipmentEvent.shipmentId);
    if (!shipment || shipment.companyId !== company.id) {
      throw new BadRequestException('Shipment event does not belong to your company');
    }

    return shipmentEvent;
  }

  async update(userId: string, id: string, updateShipmentEventDto: UpdateShipmentEventDto): Promise<ShipmentEvent> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipmentEvent = await this.shipmentEventsRepository.findById(id);
    if (!shipmentEvent) {
      throw new NotFoundException('Shipment event not found');
    }

    // Verify that the shipment belongs to the company
    const shipment = await this.shipmentsRepository.findById(shipmentEvent.shipmentId);
    if (!shipment || shipment.companyId !== company.id) {
      throw new BadRequestException('Shipment event does not belong to your company');
    }

    // If updating shipmentId, verify the new shipment exists and belongs to company
    if (updateShipmentEventDto.shipmentId && updateShipmentEventDto.shipmentId !== shipmentEvent.shipmentId) {
      const newShipment = await this.shipmentsRepository.findById(updateShipmentEventDto.shipmentId);
      if (!newShipment) {
        throw new BadRequestException('New shipment not found');
      }
      if (newShipment.companyId !== company.id) {
        throw new BadRequestException('New shipment does not belong to your company');
      }
    }

    return this.shipmentEventsRepository.update(id, updateShipmentEventDto);
  }

  async remove(userId: string, id: string): Promise<{ message: string }> {
    const company = await this.companyRepository.findByUserId(userId);

    if (!company) {
      throw new NotFoundException('Company not found for this user');
    }

    const shipmentEvent = await this.shipmentEventsRepository.findById(id);
    if (!shipmentEvent) {
      throw new NotFoundException('Shipment event not found');
    }

    // Verify that the shipment belongs to the company
    const shipment = await this.shipmentsRepository.findById(shipmentEvent.shipmentId);
    if (!shipment || shipment.companyId !== company.id) {
      throw new BadRequestException('Shipment event does not belong to your company');
    }

    await this.shipmentEventsRepository.delete(id);
    return { message: 'Shipment event deleted successfully' };
  }
}
