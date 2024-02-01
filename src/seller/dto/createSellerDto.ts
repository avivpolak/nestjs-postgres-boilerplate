import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { DistributionSession } from '../../distribution-session/distribution-session.entity';
import { Order } from '../../order/order.entity';
import { Product } from '../../product/product.entity';

export class CreateSellerDto {
  @IsString()
  name: string;

  @IsString()
  specialty: string;

  @IsString()
  welcomeMessage: string;

  @IsString()
  productDescriptionMessage: string;

  @IsUrl()
  payboxLink: string;

  @IsPhoneNumber('IL')
  bitPhoneNumber: string;

  @IsUrl()
  securePaymentLink: string;

  @IsBoolean()
  acceptingCash: boolean;

  @IsBoolean()
  acceptingCreditCard: boolean;

  @IsPhoneNumber('IL')
  questionsPhoneNumber: string;

  @IsPhoneNumber('IL')
  contactPhoneNumber: string;

  @IsNumber()
  minAmountPerDistribution: number;

  @IsNumber()
  visibilityCutoffHours: number;

  @IsArray()
  products: Product[];

  @IsArray()
  orders: Order[];

  @IsArray()
  distributionSessions: DistributionSession[];
}
