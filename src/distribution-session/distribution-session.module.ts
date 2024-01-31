import { Module } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { DistributionSessionController } from './distribution-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributionSession } from './distribution-session.entity';
import { Order } from '../order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistributionSession, Order])],
  controllers: [DistributionSessionController],
  providers: [DistributionSessionService],
  exports: [DistributionSessionService]
})
export class DistributionSessionModule {}
