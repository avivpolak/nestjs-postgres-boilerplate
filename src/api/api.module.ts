import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { DistributionSessionModule } from '../distribution-session/distribution-session.module';
import { CollectionPointModule } from '../collection-point/collection-point.module';
import { CustomerModule } from '../customer/customer.module';
import { OrderModule } from '../order/order.module';
import { ProductModule } from '../product/product.module';
import { SellerModule } from '../seller/seller.module';

@Module({
  imports: [DistributionSessionModule,CollectionPointModule,CustomerModule,OrderModule,ProductModule,SellerModule],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
