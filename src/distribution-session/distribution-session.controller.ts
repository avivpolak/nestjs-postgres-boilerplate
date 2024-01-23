import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';

@Controller('distribution-session')
export class DistributionSessionController {
  constructor(private readonly distributionSessionService: DistributionSessionService) {}

  @Post()
  create(@Body() createDistributionSessionDto: CreateDistributionSessionDto) {
    return this.distributionSessionService.create(createDistributionSessionDto);
  }

  @Get()
  findAll() {
    return this.distributionSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributionSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistributionSessionDto: UpdateDistributionSessionDto) {
    return this.distributionSessionService.update(+id, updateDistributionSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributionSessionService.remove(+id);
  }
}
