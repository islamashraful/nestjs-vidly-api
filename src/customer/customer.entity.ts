import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  isGold: boolean;

  @Column()
  phone: string;
}
