import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/createSellerDto';
import { BaseService } from '../base/base.service';

@Injectable()
export class SellerService extends BaseService<Seller> {
  constructor(
    @InjectRepository(Seller)
    private readonly sellerRepository: Repository<Seller>,
  ) {
    super(sellerRepository);
  }
  async get(id: number) {
    return await this.sellerRepository.findOne({
      where: { id: id },
      relations: ['products'],
    });
  }
  async create(entity: any): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.sellerRepository
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
        this.sellerRepository
          .findOne(id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let updatedEntity: any = Object.assign(responseGet, entity);
              this.sellerRepository
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
