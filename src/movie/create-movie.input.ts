import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, MaxLength, Min, IsUUID, IsOptional } from 'class-validator';

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

  @IsOptional()
  @IsUUID('4')
  @Field(() => ID, { defaultValue: null })
  genre: string;
}
