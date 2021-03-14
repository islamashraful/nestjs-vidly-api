import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class CreateRentalInput {
  @IsUUID('4')
  @Field((type) => ID)
  customerId: string;

  @IsUUID('4')
  @Field((type) => ID)
  movieId: string;
}
