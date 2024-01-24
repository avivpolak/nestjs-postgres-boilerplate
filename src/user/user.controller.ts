import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseController } from 'src/base/base.controller';
import { User } from 'src/user/user.entity';

@Controller('user')
export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Post()
  async create(@Body() entity: CreateUserDto): Promise<number> {
    return this.userService.create(entity);
  }

  @Put(':id')
  async update(
    @Body() entity: UpdateUserDto,
    @Param('id') id: number,
  ): Promise<UpdateUserDto> {
    return this.userService.update(entity, id);
  }
}
