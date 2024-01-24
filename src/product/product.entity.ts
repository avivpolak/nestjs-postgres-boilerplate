import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seller } from '../seller/seller.entity';
import { Order } from '../order/order.entity';
import { BaseEntity } from 'src/base/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: Number;

  @Column()
  priceForTwo: Number;

  @Column()
  image: string;

  @Column()
  inventory:number;

  @ManyToOne((type) => Seller, (seller) => seller.products)
  seller: Seller;

  @ManyToMany((type) => Order, (order) => order.products)
  orders: Order[];
}
