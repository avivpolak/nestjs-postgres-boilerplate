import { IsArray, IsNumber, IsString } from 'class-validator';
import { DistributionSession } from 'src/distribution-session/distribution-session.entity';
import { Product } from 'src/product/product.entity';
import { Seller } from 'src/seller/seller.entity';
import { Customer } from 'src/customer/customer.entity';

export class CreateOrderDto {
  @IsString()
  time: string;

  @IsNumber()
  totalCost: number;

  @IsString()
  proofOfPay: string;

  @IsNumber()
  customer: Customer;

  @IsNumber()
  seller: Seller;

  @IsNumber()
  distributionSession: DistributionSession;

  @IsArray()
  products: Product[];
}
