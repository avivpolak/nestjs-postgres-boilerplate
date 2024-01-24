import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
  async get(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
      relations: ['orders'],
    });
  }
  async create(entity: any): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.userRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  async update(entity: any,id:number): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.userRepository
          .findOne(id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let updatedEntity: any = Object.assign(responseGet, entity);
              this.userRepository
                .save(updatedEntity)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
