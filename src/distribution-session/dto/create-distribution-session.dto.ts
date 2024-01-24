import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Seller } from 'src/seller/seller.entity';

export class CreateDistributionSessionDto {
  @IsString()
  time: string;

  @IsNumber()
  collectionPointID: number;

  @IsArray()
  sellers: Seller[]

  @IsBoolean()
  hide: Boolean;
}
