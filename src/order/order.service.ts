import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService extends BaseService<Order> {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {
    super(orderRepository);
  }
  async get(id: number) {
    return await this.orderRepository.findOne({
      where: { id: id },
      relations: ['products', 'distributionSession', 'customer'], //bug https://stackoverflow.com/questions/60140903/cannot-read-property-tablepath-of-undefined-type-orm
    });
  }
  async create(entity: CreateOrderDto): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.orderRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(entity: any, id: number): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.orderRepository
          .findOne(id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let updatedEntity: any = Object.assign(responseGet, entity);
              this.orderRepository
                .save(updatedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
