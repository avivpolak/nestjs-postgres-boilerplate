import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SellerService } from './seller.service';
import { ProductService } from '../product/product.service';
import { CreateSellerDto } from './dto/createSellerDto';
import { BaseController } from 'src/base/base.controller';
import { Seller } from 'src/seller/seller.entity';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Controller('seller')
export class SellerController extends BaseController<Seller> {
  constructor(private readonly sellerService: SellerService) {
    super(sellerService);
  }

  @Post()
  async create(@Body() entity: CreateSellerDto): Promise<number> {
    return this.sellerService.create(entity);
  }

  @Put()
  async update(
    @Body() entity: UpdateSellerDto,
    @Param('id') id: number,
  ): Promise<UpdateSellerDto> {
    return this.sellerService.update(entity, id);
  }
}
