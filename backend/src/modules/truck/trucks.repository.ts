import { Truck } from '@prisma/client';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';

export abstract class TrucksRepository {
    abstract createForCompany(companyId: string, data: CreateTruckDto): Promise<Truck>;
    abstract findById(id: string): Promise<Truck | null>;
    abstract findByPlate(licensePlate: string): Promise<Truck | null>;
    abstract update(id: string, data: UpdateTruckDto): Promise<Truck>;
    abstract delete(id: string): Promise<Truck>;
}
