import { IsArray, IsPhoneNumber, IsString } from 'class-validator';
import { Order } from 'src/order/order.entity';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  manychatID: string;

  @IsPhoneNumber()
  whatsappID:string;

  @IsArray()
  orders: Order[];
}
