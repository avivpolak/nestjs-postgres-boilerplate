import { Column, Entity, OneToMany } from "typeorm";
import { Order } from "./order.entity";
import { BaseEntity } from "src/base/base.entity";

@Entity()
export class User extends BaseEntity{
  @Column()
  name: string;

  @OneToMany((type)=>Order,(order)=>order.user)
  orders: Order [];
}
