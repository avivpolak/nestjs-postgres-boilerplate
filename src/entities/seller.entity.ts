import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("varchar",{ array: true , nullable:true})
  @OneToMany((type)=>Product,(product)=>product.seller)
  products: Product [];
}
