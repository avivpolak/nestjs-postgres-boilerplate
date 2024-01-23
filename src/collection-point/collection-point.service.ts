import { Injectable } from '@nestjs/common';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionPoint } from 'src/entities/collection-point.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionPointService {
  constructor(
    @InjectRepository(CollectionPoint) private readonly collectionPointRepo: Repository<CollectionPoint>,
  ) {}
  async create(createCollectionPointDto: CreateCollectionPointDto) {
    const collectionPoint = this.collectionPointRepo.create(createCollectionPointDto)
    return await this.collectionPointRepo.save(collectionPoint)
  }

  async findAll() {
    return await this.collectionPointRepo.find()
  }

  async findOne(id: number) {
    return await this.collectionPointRepo.findOne({
      where:{id: id},
      relations:["distributionSessions"]
    })
  }

  async update(id: number,updateCollectionPointDto: UpdateCollectionPointDto) {
    const collectionPoint = await this.collectionPointRepo.findOneOrFail(id)
    return await this.collectionPointRepo.update(collectionPoint,updateCollectionPointDto)
  }

  async remove(id: number) {
    return await this.collectionPointRepo.delete(id)
  }
}
