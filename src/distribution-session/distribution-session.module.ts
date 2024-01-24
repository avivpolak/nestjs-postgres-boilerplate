import { Module } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { DistributionSessionController } from './distribution-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributionSession } from 'src/distribution-session/distribution-session.entity';
import { Order } from 'src/order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistributionSession, Order])],
  controllers: [DistributionSessionController],
  providers: [DistributionSessionService],
})
export class DistributionSessionModule {}
