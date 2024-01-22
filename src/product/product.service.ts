import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProductDto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  async findOne(id: string) {
    return await this.productRepo.findOne({where:{id: id}})
  }

  async create(createProductDto:CreateProductDto){
    const product = this.productRepo.create(createProductDto)
    return await this.productRepo.save(product)
  }
}
