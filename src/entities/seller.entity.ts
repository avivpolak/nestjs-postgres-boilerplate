import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { BaseEntity } from 'src/base/base.entity';

@Entity()
export class Seller extends BaseEntity {
  @Column()
  name: string;

  @OneToMany((type)=>Product,(product)=>product.seller)
  products: Product [];
}
