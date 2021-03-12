import { InputType, Field, ID } from '@nestjs/graphql';
import {
  MaxLength,
  MinLength,
  IsOptional,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

@InputType()
export class UpdateCustomerInput {
  // TODO: Make all fields optional
  @IsOptional()
  @MinLength(5)
  @MaxLength(50)
  @Field()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @Field()
  isGold: boolean;

  @IsOptional()
  @MinLength(5)
  @MaxLength(50)
  @Field()
  phone: string;

  @IsUUID('4')
  @Field((type) => ID)
  id: string;
}
