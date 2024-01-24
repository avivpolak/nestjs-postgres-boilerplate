import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { CollectionPoint } from '../collection-point/collection-point.entity';
import { Order } from '../order/order.entity';
import { BaseEntity } from 'src/base/base.entity';
import { Seller } from 'src/seller/seller.entity';

@Entity()
export class DistributionSession extends BaseEntity {
  @Column()
  time: string;

  @Column()
  hide: Boolean;

  @ManyToOne(
    (type) => CollectionPoint,
    (collectionPoint) => collectionPoint.distributionSessions,
  )
  collectionPoint: CollectionPoint;

  @OneToMany((type) => Order, (order) => order.customer)
  orders: Order[];

  @ManyToMany((type) => Seller, (seller) => seller.distributionSessions)
  sellers: Seller[];
}
