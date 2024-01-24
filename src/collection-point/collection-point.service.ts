import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CollectionPoint } from 'src/collection-point/collection-point.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CollectionPointService extends BaseService<CollectionPoint> {
  constructor(
    @InjectRepository(CollectionPoint)
    private readonly collectionPointRepository: Repository<CollectionPoint>,
  ) {
    super(collectionPointRepository);
  }
  async get(id: number) {
    return await this.collectionPointRepository.findOne({
      where: { id: id },
      relations: ['distributionSessions'],
    });
  }
  async create(entity: any): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.collectionPointRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(entity: any,id:number): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.collectionPointRepository
          .findOne(id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let updatedEntity: any = Object.assign(responseGet, entity);
              this.collectionPointRepository
                .save(updatedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
}
}