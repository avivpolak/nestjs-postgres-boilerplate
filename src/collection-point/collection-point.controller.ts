import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollectionPointService } from './collection-point.service';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';
import { BaseController } from 'src/base/base.controller';
import { CollectionPoint } from 'src/entities/collection-point.entity';

@Controller('collection-point')
export class CollectionPointController extends BaseController<CollectionPoint>{
  constructor(private readonly collectionPointService: CollectionPointService) {
		super(collectionPointService)
	}
}