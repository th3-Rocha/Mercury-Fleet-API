import { Shipment } from "@prisma/client";
import { CreateShipmentDto } from "./dto/create-shipment.dto";


export abstract class ShipmentsRepository {
    abstract createForCompany(companyId: string, data: CreateShipmentDto): Promise<Shipment>;
    abstract findById(id: string): Promise<Shipment | null>;
    abstract update(id: string, data: Partial<CreateShipmentDto>): Promise<Shipment>;
    abstract delete(id: string): Promise<Shipment>;
    abstract findAll(): Promise<Shipment[]>;
    abstract findAllByCompany(companyId: string): Promise<Shipment[]>;
}
