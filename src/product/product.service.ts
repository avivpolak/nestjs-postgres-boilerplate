import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/createProductDto';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }
  async get(id: number) {
    return await this.productRepository.findOne({
      where: { id: id },
      relations: ['orders'], //bug https://stackoverflow.com/questions/60140903/cannot-read-property-tablepath-of-undefined-type-orm
    });
  }
}
