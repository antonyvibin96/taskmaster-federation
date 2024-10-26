import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  userId: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  role: string;
}
