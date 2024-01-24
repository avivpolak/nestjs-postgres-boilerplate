import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { BaseController } from 'src/base/base.controller';
import { Order } from 'src/order/order.entity';

@Controller('order')
export class OrderController extends BaseController<Order> {
  constructor(private readonly orderService: OrderService) {
    super(orderService);
  }
}
