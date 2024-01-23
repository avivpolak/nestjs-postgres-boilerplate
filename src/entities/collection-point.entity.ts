import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract.entity";

@Entity()
export class CollectionPoint extends AbstractEntity<CollectionPoint>{
  @Column()
  address: string;
}
