import { Field, ObjectType, ID } from '@nestjs/graphql';
import { CustomerType } from 'src/customer/customer.type';
import { MovieType } from 'src/movie/movie.type';

@ObjectType('Rental')
export class RentalType {
  @Field((type) => ID)
  id: string;

  @Field()
  dateOut: string;

  @Field((type) => CustomerType)
  customer: string;

  @Field((type) => MovieType)
  movie: string;
}
