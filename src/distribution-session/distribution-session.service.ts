import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DistributionSession } from 'src/distribution-session/distribution-session.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class DistributionSessionService extends BaseService<DistributionSession> {
  constructor(
    @InjectRepository(DistributionSession)
    private readonly distributionSessionRepository: Repository<DistributionSession>,
  ) {
    super(distributionSessionRepository);
  }
  async get(id: number) {
    return await this.distributionSessionRepository.findOne({
      where: { id: id },
      relations: ['orders'],
    });
  }
  async create(entity: any): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.distributionSessionRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(entity: any, id: number): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.distributionSessionRepository
          .findOne(id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let updatedEntity: any = Object.assign(responseGet, entity);
              this.distributionSessionRepository
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
