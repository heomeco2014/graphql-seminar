/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  projectOwner: User;

  @Field({ nullable: true })
  client: string;

  @Field({ nullable: true })
  budget: number;
}
