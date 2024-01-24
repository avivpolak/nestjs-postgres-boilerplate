import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { DistributionSession } from "./distribution-session.entity";
import { Product } from "./product.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class Order extends BaseEntity{
  @Column()
  time:string;

  @ManyToOne((type)=>User,(user)=>user.orders)
  user: User;

  @ManyToOne((type)=>DistributionSession,(distributionSession)=>distributionSession.orders)
  distributionSession: User;

  @ManyToMany((type)=>Product,(product)=>product.orders)
  products: Product[];
}
