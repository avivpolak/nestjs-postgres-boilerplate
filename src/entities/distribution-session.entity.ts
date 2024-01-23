import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { CollectionPoint } from "./collection-point.entity";

@Entity()
export class DistributionSession extends AbstractEntity<DistributionSession> {
  @Column()
  time:string;

  @ManyToOne((type)=>CollectionPoint,(collectionPoint)=>collectionPoint.distributionSessions)
  collectionPoint:CollectionPoint;
}
