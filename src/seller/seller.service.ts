import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from 'src/seller/seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/createSellerDto';
import { BaseService } from 'src/base/base.service';

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
}
