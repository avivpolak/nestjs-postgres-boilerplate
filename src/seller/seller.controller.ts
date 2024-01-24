import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SellerService } from './seller.service';
import { ProductService } from '../product/product.service';
import { CreateSellerDto } from './dto/createSellerDto';
import { BaseController } from 'src/base/base.controller';
import { Seller } from 'src/entities/seller.entity';

@Controller('seller')
export class SellerController extends BaseController<Seller>{
  constructor(private readonly sellerService: SellerService) {
		super(sellerService)
	}
}