import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto)
    return await this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find()
  }

  findOne(id: number) {
    return this.userRepo.findOneOrFail(id)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOneOrFail(id)
    return await this.userRepo.update(user,updateUserDto)
  }

  async remove(id: number) {
    return await this.userRepo.delete(id)
  }
}
