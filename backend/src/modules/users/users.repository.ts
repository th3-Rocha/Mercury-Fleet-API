import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findById(id: string): Promise<User | null>;
  abstract update(id: string, data: Partial<CreateUserDto>): Promise<User>;
  abstract delete(id: string): Promise<User>;
}
