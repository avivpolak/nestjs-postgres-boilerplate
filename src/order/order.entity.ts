import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Customer } from '../customer/customer.entity';
import { DistributionSession } from '../distribution-session/distribution-session.entity';
import { Product } from '../product/product.entity';
import { BaseEntity } from '../base/base.entity';
import { Seller } from '../seller/seller.entity';

@Entity()
export class Order extends BaseEntity {
  @Column()
  time: string;

  @Column()
  totalCost: number;

  @Column()
  proofOfPay: string;

  @ManyToOne((type) => Seller, (seller) => seller.orders)
  seller: Seller;

  @ManyToOne((type) => Customer, (customer) => customer.orders)
  customer: Customer;

  @ManyToOne(
    (type) => DistributionSession,
    (distributionSession) => distributionSession.orders,
  )
  distributionSession: DistributionSession;

  @ManyToMany((type) => Product, (product) => product.orders)
  @JoinTable()
  products: Product[];
}
