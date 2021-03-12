import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('CustomerType')
export class CustomerType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  isGold: string;

  @Field()
  phone: string;
}
