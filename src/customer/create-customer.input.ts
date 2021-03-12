import { InputType, Field } from '@nestjs/graphql';
import {
  MaxLength,
  MinLength,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @MinLength(5)
  @MaxLength(50)
  @Field()
  name: string;

  // TODO: IsOptional() decorator isn't working. Fix it.
  @IsOptional()
  @IsNotEmpty()
  @Field()
  isGold: boolean;

  @MinLength(5)
  @MaxLength(50)
  @Field()
  phone: string;
}
