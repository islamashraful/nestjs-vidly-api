import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CustomerInput {
  @IsUUID('4')
  @Field((type) => ID)
  id: string;
}
