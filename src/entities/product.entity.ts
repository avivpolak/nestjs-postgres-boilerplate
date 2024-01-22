import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seller } from './seller.entity';
import { AbstractEntity } from './abstract.entity';

@Entity()
export class Product extends AbstractEntity<Product>{
  @Column()
  name: string;

  @Column()
  price: Number;

  @ManyToOne((type)=>Seller,(seller)=>seller.products)
  seller: Seller;
}
