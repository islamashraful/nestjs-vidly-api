import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GenreType } from 'src/genre/genre.type';

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

  @Field((type) => GenreType)
  genre: string;
}
