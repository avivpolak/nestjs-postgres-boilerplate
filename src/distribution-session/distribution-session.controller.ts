import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';
import { BaseController } from '../base/base.controller';
import { DistributionSession } from './distribution-session.entity';

@Controller('distribution-session')
export class DistributionSessionController extends BaseController<DistributionSession> {
  constructor(
    private readonly distributionSessionService: DistributionSessionService,
  ) {
    super(distributionSessionService);
  }

  @Post()
  async create(@Body() entity: CreateDistributionSessionDto): Promise<number> {
    return this.distributionSessionService.create(entity);
  }

  @Put()
  async update(
    @Body() entity: UpdateDistributionSessionDto,
    @Param('id') id: number,
  ): Promise<UpdateDistributionSessionDto> {
    return this.distributionSessionService.update(entity, id);
  }
}
