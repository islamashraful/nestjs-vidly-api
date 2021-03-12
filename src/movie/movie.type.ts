import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Movie')
export class MovieType {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  numberInStock: number;

  @Field()
  dailyRentalRate: number;
}
