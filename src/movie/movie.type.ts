import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Movie')
export class MovieType {
  @Field()
  title: string;

  @Field()
  numberInStock: number;

  @Field()
  dailyRentalRate: number;
}
