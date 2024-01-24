import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Order } from 'src/order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
