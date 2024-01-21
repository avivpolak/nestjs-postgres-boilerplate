import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
// import { SellerService } from '../seller/seller.service';
import { CreateProductDto } from './dto/createProductDto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    // private readonly sellerService: SellerService,
  ){}
  @Get(':id')
  findOne(@Param('id') id: string){
    return "ok"
    //return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto:CreateProductDto){
    return "ok"

    //return this.productService.create(createProductDto)
  }
}
