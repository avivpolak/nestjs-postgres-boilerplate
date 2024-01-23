import { Column, Entity, OneToMany } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Order } from "./order.entity";

@Entity()
export class User extends AbstractEntity<User>{
  @Column()
  name: string;

  @OneToMany((type)=>Order,(order)=>order.user)
  orders: Order [];

  
}
