import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('LoginResponse')
export class AuthResponseType {
  @Field()
  accessToken: string;
}
