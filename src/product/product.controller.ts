import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProductDto';
import { BaseController } from 'src/base/base.controller';
import { Product } from 'src/product/product.entity';

@Controller('product')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }
}
