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
import { CollectionPointService } from './collection-point.service';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';
import { BaseController } from '../base/base.controller';
import { CollectionPoint } from './collection-point.entity';

@Controller('collection-point')
export class CollectionPointController extends BaseController<CollectionPoint> {
  constructor(private readonly collectionPointService: CollectionPointService) {
    super(collectionPointService);
  }

  @Post()
  async create(@Body() entity: CreateCollectionPointDto): Promise<number> {
    return this.collectionPointService.create(entity);
  }

  @Put()
  async update(
    @Body() entity: UpdateCollectionPointDto,
    @Param('id') id: number,
  ): Promise<UpdateCollectionPointDto> {
    return this.collectionPointService.update(entity, id);
  }
}
