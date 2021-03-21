import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('IdentityResponse')
export class IdentityResponseType {
  @Field()
  email: string;
}
