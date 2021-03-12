import { InputType, Field } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateGenreInput {
  @MinLength(5)
  @MaxLength(50)
  @Field()
  name: string;
}
