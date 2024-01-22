import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from 'src/entities/seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/createSellerDto';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller) private readonly sellerRepo: Repository<Seller>,
  ) {}

  async findOne(id: string) {
    return await this.sellerRepo.findOne({
      where:{id: id},
      relations:["products"]
    })
  }

  async create(createSellerDto:CreateSellerDto){
    const seller = this.sellerRepo.create(createSellerDto)
    return await this.sellerRepo.save(seller)
  }
}
