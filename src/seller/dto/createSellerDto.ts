import { IsArray, IsString } from "class-validator";
import { Product } from "src/entities/product.entity";

export class CreateSellerDto{
  @IsString()
  name:string;

  @IsArray()
  products:Product[];
}