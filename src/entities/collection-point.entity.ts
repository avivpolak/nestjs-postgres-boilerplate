import { Column, Entity, OneToMany } from "typeorm";
import { DistributionSession } from "./distribution-session.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class CollectionPoint extends BaseEntity{
  @Column()
  address: string;

  @OneToMany((type)=>DistributionSession,(distributionSession)=>distributionSession.collectionPoint)
  distributionSessions: DistributionSession [];
}
