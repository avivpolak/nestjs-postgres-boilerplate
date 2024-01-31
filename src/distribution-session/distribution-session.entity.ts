import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CollectionPoint } from '../collection-point/collection-point.entity';
import { Order } from '../order/order.entity';
import { BaseEntity } from '../base/base.entity';
import { Seller } from '../seller/seller.entity';

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
  // @JoinTable({
  //   name: 'distributionSession',
  //   joinColumn: {
  //     name: 'distributionSessions',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'seller',
  //     referencedColumnName: 'id',
  //   },
  // })
  sellers: Seller[];
}
