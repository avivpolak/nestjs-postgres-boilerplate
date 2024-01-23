import { Module } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { DistributionSessionController } from './distribution-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributionSession } from 'src/entities/distribution-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistributionSession])],
  controllers: [DistributionSessionController],
  providers: [DistributionSessionService]
})
export class DistributionSessionModule {}
