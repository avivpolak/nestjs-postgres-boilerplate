import { Module } from '@nestjs/common';
import { CollectionPointService } from './collection-point.service';
import { CollectionPointController } from './collection-point.controller';
import { CollectionPoint } from 'src/entities/collection-point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributionSession } from 'src/entities/distribution-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionPoint,DistributionSession])],
  controllers: [CollectionPointController],
  providers: [CollectionPointService]
})
export class CollectionPointModule {}
