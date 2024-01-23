import { Injectable } from '@nestjs/common';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DistributionSession } from 'src/entities/distribution-session.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';


@Injectable()
export class DistributionSessionService {
  constructor(
    @InjectRepository(DistributionSession) private readonly distributionSessionRepo: Repository<DistributionSession>,
  ) {}
  async create(createDistributionSessionDto: CreateDistributionSessionDto) {
    const distributionSession = this.distributionSessionRepo.create(createDistributionSessionDto)
    return await this.distributionSessionRepo.save(distributionSession)
  }

  async findAll() {
    return await this.distributionSessionRepo.find()
  }

  async findOne(id: number) {
    return await this.distributionSessionRepo.findOneOrFail(id)
  }

  async update(id: number,updateDistributionSessionDto: UpdateDistributionSessionDto) {
    const collectionPoint = await this.distributionSessionRepo.findOneOrFail(id)
    return await this.distributionSessionRepo.update(collectionPoint,updateDistributionSessionDto)
  }

  async remove(id: number) {
    return await this.distributionSessionRepo.delete(id)
  }
}
