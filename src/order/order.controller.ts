import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { BaseController } from 'src/base/base.controller';
import { Order } from 'src/order/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController extends BaseController<Order> {
  constructor(private readonly orderService: OrderService) {
    super(orderService);
  }

  @Post()
  async create(@Body() entity: CreateOrderDto): Promise<number> {
    return this.orderService.create(entity);
  }

  @Put()
  async update(
    @Body() entity: UpdateOrderDto,
    @Param('id') id: number,
  ): Promise<UpdateOrderDto> {
    return this.orderService.update(entity, id);
  }
}
