import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, MaxLength, Min } from 'class-validator';

@InputType()
export class CreateMovieInput {
  @MinLength(5)
  @MaxLength(50)
  @Field()
  title: string;

  @Min(0)
  @Field()
  numberInStock: number;

  @Min(0)
  @Field()
  dailyRentalRate: number;
}
