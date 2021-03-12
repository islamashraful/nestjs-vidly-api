import { InputType, Field, ID } from '@nestjs/graphql';
import { MaxLength, MinLength, IsUUID } from 'class-validator';

@InputType()
export class UpdateGenreInput {
  @IsUUID('4')
  @Field((type) => ID)
  id: string;

  @MinLength(5)
  @MaxLength(50)
  @Field()
  name: string;
}
