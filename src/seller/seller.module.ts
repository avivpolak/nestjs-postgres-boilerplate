import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from '../entities/seller.entity';
import { ProductService } from '../product/product.service';
import { Product } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seller,Product])],
  controllers: [SellerController],
  providers: [SellerService,ProductService]
})
export class SellerModule {}