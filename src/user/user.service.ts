import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UserService  extends BaseService<User>{
  constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>) {
			super(userRepository);
	}
}
