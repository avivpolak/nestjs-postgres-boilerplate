import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seller } from './seller.entity';
import { AbstractEntity } from './abstract.entity';
import { Order } from './order.entity';

@Entity()
export class Product extends AbstractEntity<Product>{
  @Column()
  name: string;

  @Column()
  price: Number;

  @ManyToOne((type)=>Seller,(seller)=>seller.products)
  seller: Seller;

  @ManyToMany((type)=>Order,(order)=>order.products)
  orders: Order [];
}
