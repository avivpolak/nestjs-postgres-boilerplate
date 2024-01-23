import { Injectable } from '@nestjs/common';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';

@Injectable()
export class DistributionSessionService {
  create(createDistributionSessionDto: CreateDistributionSessionDto) {
    return 'This action adds a new distributionSession';
  }

  findAll() {
    return `This action returns all distributionSession`;
  }

  findOne(id: number) {
    return `This action returns a #${id} distributionSession`;
  }

  update(id: number, updateDistributionSessionDto: UpdateDistributionSessionDto) {
    return `This action updates a #${id} distributionSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} distributionSession`;
  }
}
