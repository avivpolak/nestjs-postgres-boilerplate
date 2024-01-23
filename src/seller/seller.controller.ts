import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SellerService } from './seller.service';
import { ProductService } from '../product/product.service';
import { CreateSellerDto } from './dto/createSellerDto';

@Controller('seller')
export class SellerController {
  constructor(
    private readonly sellerService: SellerService,
  ){}
  @Get(':id')
  findOne(@Param('id') id: string){
    return this.sellerService.findOne(id);
  }

  @Post()
  create(@Body() createSellerDto:CreateSellerDto){
    return this.sellerService.create(createSellerDto)
  }
}
