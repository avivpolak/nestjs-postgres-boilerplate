import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Seller } from '../../seller/seller.entity';
import { CollectionPoint } from '../../collection-point/collection-point.entity';

export class CreateDistributionSessionDto {
  @IsString()
  time: string;

  @IsNumber()
  collectionPoint: CollectionPoint;

  @IsArray()
  sellers: Seller[];

  @IsBoolean()
  hide: Boolean;
}
