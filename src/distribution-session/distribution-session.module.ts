import { Module } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { DistributionSessionController } from './distribution-session.controller';

@Module({
  controllers: [DistributionSessionController],
  providers: [DistributionSessionService]
})
export class DistributionSessionModule {}
