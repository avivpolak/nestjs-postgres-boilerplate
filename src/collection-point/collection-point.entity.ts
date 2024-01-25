import { Column, Entity, OneToMany } from 'typeorm';
import { DistributionSession } from '../distribution-session/distribution-session.entity';
import { BaseEntity } from '../base/base.entity';

@Entity()
export class CollectionPoint extends BaseEntity {
  @Column()
  city: string;

  @Column()
  address: string;

  @OneToMany(
    (type) => DistributionSession,
    (distributionSession) => distributionSession.collectionPoint,
  )
  distributionSessions: DistributionSession[];
}
