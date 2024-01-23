import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { User } from "./user.entity";
import { DistributionSession } from "./distribution-session.entity";
import { Product } from "./product.entity";

@Entity()
export class Order extends AbstractEntity<Order>{
  @Column()
  time:string;

  @ManyToOne((type)=>User,(user)=>user.orders)
  user: User;

  @ManyToOne((type)=>DistributionSession,(distributionSession)=>distributionSession.orders)
  distributionSession: User;

  @ManyToMany((type)=>Product,(product)=>product.orders)
  products: Product[];
}
