import { Injectable } from "@nestjs/common";
import { ShipmentEvent } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateShipmentEventDto } from "./dto/create-shipment_event.dto";
import { ShipmentsEventsRepository } from "./shipment_events.repository";
import { UpdateShipmentEventDto } from "./dto/update-shipment_event.dto";


@Injectable()
export class PrismaShipmentsEventsRepository implements ShipmentsEventsRepository {
    constructor(private prisma: PrismaService) { }
    async create(data: CreateShipmentEventDto): Promise<ShipmentEvent> {


        return this.prisma.shipmentEvent.create({
            data: {
                ...data
            },
        });
    }
    async findById(id: string): Promise<ShipmentEvent | null> {
        return this.prisma.shipmentEvent.findUnique({ where: { id } });
    }
    async findByShipmentEventId(shipmentId: string): Promise<ShipmentEvent[]> {
        return this.prisma.shipmentEvent.findMany({ where: { shipmentId } });
    }
    async delete(id: string): Promise<ShipmentEvent> {
        return this.prisma.shipmentEvent.delete({ where: { id } });
    }
    async update(id: string, data: UpdateShipmentEventDto): Promise<ShipmentEvent> {
        return this.prisma.shipmentEvent.update({
            where: { id },
            data: {
                ...data
            },
        });
    }

}   