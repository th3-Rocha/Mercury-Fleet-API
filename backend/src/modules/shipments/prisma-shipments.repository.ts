import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ShipmentsRepository } from "./shipments.repository";
import { CreateShipmentDto } from "./dto/create-shipment.dto";
import { UpdateShipmentDto } from "./dto/update-shipment.dto";
import { Shipment } from "@prisma/client";

@Injectable()
export class PrismaShipmentsRepository implements ShipmentsRepository {
    constructor(private prisma: PrismaService) { }

    async createForCompany(companyId: string, data: CreateShipmentDto): Promise<Shipment> {
        const { employeeId, truckId, recipientId, ...shipmentData } = data;

        return this.prisma.shipment.create({
            data: {
                ...shipmentData,
                company: { connect: { id: companyId } },
                employee: { connect: { id: employeeId } },
                truck: { connect: { id: truckId } },
                recipient: { connect: { id: recipientId } },
            },
        });
    }
    async findById(id: string): Promise<Shipment | null> {
        return this.prisma.shipment.findUnique({ where: { id } });
    }
    async findAll(): Promise<Shipment[]> {
        return this.prisma.shipment.findMany();
    }
    async findAllByCompany(companyId: string): Promise<Shipment[]> {
        return this.prisma.shipment.findMany({
            where: { companyId },
        });
    }
    async delete(id: string): Promise<Shipment> {
        return this.prisma.shipment.delete({ where: { id } });
    }
    async update(id: string, data: UpdateShipmentDto): Promise<Shipment> {
        const { employeeId, truckId, recipientId, ...normalFields } = data;

        return this.prisma.shipment.update({
            where: { id },
            data: {
                ...normalFields,
                ...(employeeId && { employee: { connect: { id: employeeId } } }),
                ...(truckId && { truck: { connect: { id: truckId } } }),
                ...(recipientId && { recipient: { connect: { id: recipientId } } }),
            },
        });
    }
}