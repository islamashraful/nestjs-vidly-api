import { Entity, ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Genre {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
