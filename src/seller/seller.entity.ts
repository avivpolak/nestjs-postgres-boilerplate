import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../product/product.entity';
import { BaseEntity } from '../base/base.entity';
import { Order } from '../order/order.entity';
import { DistributionSession } from '../distribution-session/distribution-session.entity';

@Entity()
export class Seller extends BaseEntity {
  @Column()
  name: string;

  @Column()
  specialty: string;

  @Column()
  welcomeMessage: string;

  @Column()
  productDescriptionMessage: string;

  @Column()
  payboxLink: string;

  @Column()
  bitPhoneNumber: string;

  @Column()
  questionsPhoneNumber: string;

  @Column()
  contactPhoneNumber: string;

  @Column()
  minAmountPerDistribution: number;

  @Column()
  visibilityCutoffHours: number;

  @OneToMany((type) => Product, (product) => product.seller)
  products: Product[];

  @OneToMany((type) => Order, (order) => order.seller)
  orders: Order[];

  @ManyToMany(
    (type) => DistributionSession,
    (distributionSession) => distributionSession.sellers,
  )
  distributionSessions: DistributionSession[];
}
