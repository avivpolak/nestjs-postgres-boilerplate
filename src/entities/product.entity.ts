import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seller } from './seller.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: Number;

  @Column('varchar')
  @ManyToOne((type)=>Seller,(seller)=>seller.id)
  seller: Seller;
}
