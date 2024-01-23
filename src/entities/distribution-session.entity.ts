import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { CollectionPoint } from "./collection-point.entity";
import { Order } from "./order.entity";

@Entity()
export class DistributionSession extends AbstractEntity<DistributionSession> {
  @Column()
  time:string;

  @ManyToOne((type)=>CollectionPoint,(collectionPoint)=>collectionPoint.distributionSessions)
  collectionPoint:CollectionPoint;

  @OneToMany((type)=>Order,(order)=>order.user)
  orders: Order [];
}
