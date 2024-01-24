import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { BaseService } from 'src/base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService extends BaseService<Order>{
  constructor(
		@InjectRepository(Order)
		private readonly orderRepository: Repository<Order>) {
			super(orderRepository);
	}
  async get(id: number) {
    return await this.orderRepository.findOne({
      where:{id: id},
      relations:["products","distributionSession","user"] //bug https://stackoverflow.com/questions/60140903/cannot-read-property-tablepath-of-undefined-type-orm
    })
  }
}
