import { Injectable } from '@nestjs/common';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionPoint } from 'src/entities/collection-point.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CollectionPointService extends BaseService<CollectionPoint>{
  constructor(
		@InjectRepository(CollectionPoint)
		private readonly collectionPointRepository: Repository<CollectionPoint>) {
			super(collectionPointRepository);
	}
  async get(id: number) {
    return await this.collectionPointRepository.findOne({
      where:{id: id},
      relations:["distributionSessions"]
    })
  }
}