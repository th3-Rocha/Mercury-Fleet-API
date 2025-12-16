import { Recipient, ShipmentEvent } from '@prisma/client';
import { CreateShipmentEventDto } from './dto/create-shipment_event.dto';
import { UpdateShipmentEventDto } from './dto/update-shipment_event.dto';


export abstract class ShipmentsEventsRepository {
    abstract create(data: CreateShipmentEventDto): Promise<ShipmentEvent>;
    abstract findById(id: string): Promise<ShipmentEvent | null>;
    abstract findByShipmentEventId(shipmentId: string): Promise<ShipmentEvent[]>;
    abstract delete(id: string): Promise<ShipmentEvent>;
    abstract update(id: string, data: UpdateShipmentEventDto): Promise<ShipmentEvent>;
}
