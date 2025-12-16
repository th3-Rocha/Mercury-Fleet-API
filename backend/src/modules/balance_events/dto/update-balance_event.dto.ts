import { PartialType } from '@nestjs/swagger';
import { CreateBalanceEventDto } from './create-balance_event.dto';

export class UpdateBalanceEventDto extends PartialType(CreateBalanceEventDto) { }
