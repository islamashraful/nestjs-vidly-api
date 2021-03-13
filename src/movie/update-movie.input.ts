import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, MaxLength, Min, IsUUID, IsOptional } from 'class-validator';

@InputType()
export class UpdateMovieInput {
  @IsUUID('4')
  @Field((type) => ID)
  id: string;

  @IsOptional() // Skips MinLength and MaxLength validator
  @MinLength(5)
  @MaxLength(50)
  @Field({ nullable: true }) // Accepts null or undefined for title field
  title: string;

  @IsOptional()
  @Min(0)
  @Field({ nullable: true })
  numberInStock: number;

  @IsOptional()
  @Min(0)
  @Field({ nullable: true })
  dailyRentalRate: number;

  @IsOptional()
  @IsUUID('4')
  @Field(() => ID, { defaultValue: null })
  genreId: string;
}
