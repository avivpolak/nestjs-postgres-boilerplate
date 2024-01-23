import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollectionPointService } from './collection-point.service';
import { CreateCollectionPointDto } from './dto/create-collection-point.dto';
import { UpdateCollectionPointDto } from './dto/update-collection-point.dto';

@Controller('collection-point')
export class CollectionPointController {
  constructor(private readonly collectionPointService: CollectionPointService) {}

  @Post()
  create(@Body() createCollectionPointDto: CreateCollectionPointDto) {
    return this.collectionPointService.create(createCollectionPointDto);
  }

  @Get()
  findAll() {
    return this.collectionPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionPointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionPointDto: UpdateCollectionPointDto) {
    return this.collectionPointService.update(+id, updateCollectionPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionPointService.remove(+id);
  }
}
