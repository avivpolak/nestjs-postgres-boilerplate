import { Injectable } from '@nestjs/common';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DistributionSession } from 'src/entities/distribution-session.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';


@Injectable()
export class DistributionSessionService extends BaseService<DistributionSession>{
  constructor(
		@InjectRepository(DistributionSession)
		private readonly distributionSessionRepository: Repository<DistributionSession>) {
			super(distributionSessionRepository);
	}
  async get(id: number) {
    return await this.distributionSessionRepository.findOne({
      where:{id: id},
      relations:["orders"]
    })
  }
}
