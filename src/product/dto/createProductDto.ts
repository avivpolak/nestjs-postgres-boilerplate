import { IsNumber, IsString } from "class-validator";
import { Seller } from "src/entities/seller.entity";

export class CreateProductDto{
  @IsString()
  name:string;

  @IsNumber()
  price:number;

  @IsNumber()
  sellerID:number;
}