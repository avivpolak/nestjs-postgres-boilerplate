import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProductDto';
import { BaseController } from '../base/base.controller';
import { Product } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }

  @Post()
  async create(@Body() entity: CreateProductDto): Promise<number> {
    return this.productService.create(entity);
  }

  @Put()
  async update(
    @Body() entity: UpdateProductDto,
    @Param('id') id: number,
  ): Promise<UpdateProductDto> {
    return this.productService.update(entity, id);
  }
}
