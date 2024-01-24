import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
}
