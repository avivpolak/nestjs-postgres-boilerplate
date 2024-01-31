import { IsInt, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  priceForTwo: number;

  @IsUrl()
  image: string;

  @IsNumber()
  inventory: number;

  @IsNumber()
  seller: number;
}
