import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(5)
  @MaxLength(50)
  @Field()
  name: string;

  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  @Field()
  email: string;

  @MinLength(5)
  @MaxLength(1024)
  @Field() // TODO: Add strong pattern
  password: string;
}
