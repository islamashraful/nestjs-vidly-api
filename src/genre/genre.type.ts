import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Genre')
export class GenreType {
  @Field()
  id: string;

  @Field()
  name: string;
}
