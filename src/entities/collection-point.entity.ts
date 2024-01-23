import { Column, Entity, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { DistributionSession } from "./distribution-session.entity";

@Entity()
export class CollectionPoint extends AbstractEntity<CollectionPoint>{
  @Column()
  address: string;

  @OneToMany((type)=>DistributionSession,(distributionSession)=>distributionSession.collectionPoint)
  distributionSessions: DistributionSession [];
}
