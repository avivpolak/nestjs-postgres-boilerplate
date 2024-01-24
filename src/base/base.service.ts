import { Injectable, BadGatewayException, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  get(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findOne(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  delete(id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
