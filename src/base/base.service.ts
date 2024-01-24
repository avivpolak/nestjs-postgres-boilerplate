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
      const object = this.genericRepository.findOne(id)
      if(object===null){
        return ('Bad Request')//for some reason does not sending.
      }
      this.genericRepository.delete(id);
      return id//for some reason does not sending.
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

//   try {
//     return new Promise<any>((resolve, reject) => {
//       this.genericRepository
//         .findOne(id)
//         .then((responseGet) => {
//           try {
//             if (responseGet == null) reject('Not existing');
//             this.genericRepository
//               .delete(id)
//               .then((response) => resolve(response))
//               .catch((err) => reject(err));
//           } catch (e) {
//             reject(e);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   } catch (error) {
//     throw new BadGatewayException(error);
//   }
// }
}
