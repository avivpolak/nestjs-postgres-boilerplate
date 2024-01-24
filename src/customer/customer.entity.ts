import { Column, Entity, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';
import { BaseEntity } from 'src/base/base.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column()
  name: string;

  @Column()
  manychatID: string;

  @Column()
  whatsappID: string;

  @OneToMany((type) => Order, (order) => order.customer)
  orders: Order[];
}
