import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { AbstractEntity } from './abstract.entity';

@Entity()
export class Seller extends AbstractEntity<Seller> {
  @Column()
  name: string;

  @OneToMany((type)=>Product,(product)=>product.seller)
  products: Product [];
}
