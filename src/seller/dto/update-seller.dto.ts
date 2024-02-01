import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './createSellerDto';

export class UpdateSellerDto extends PartialType(CreateSellerDto) {}
