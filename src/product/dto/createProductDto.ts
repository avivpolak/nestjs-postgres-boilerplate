import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  priceForTwo: Number;

  @IsUrl()
  image: string;

  @IsNumber()
  inventory: number;

  @IsNumber()
  sellerID: number;
}
