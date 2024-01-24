import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CollectionPoint } from "./collection-point.entity";
import { Order } from "./order.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class DistributionSession extends BaseEntity {
  @Column()
  time:string;

  @ManyToOne((type)=>CollectionPoint,(collectionPoint)=>collectionPoint.distributionSessions)
  collectionPoint:CollectionPoint;

  @OneToMany((type)=>Order,(order)=>order.user)
  orders: Order [];
}
