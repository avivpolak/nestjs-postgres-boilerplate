import { IsArray, IsString } from 'class-validator';
import { Product } from 'src/product/product.entity';

export class CreateSellerDto {
  @IsString()
  name: string;

  @IsArray()
  products: Product[];
}
