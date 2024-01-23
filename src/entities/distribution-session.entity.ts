import { Entity } from "typeorm";
import { AbstractEntity } from "./abstract.entity";

@Entity()
export class DistributionSession extends AbstractEntity<DistributionSession> {
  time:Date;
}
