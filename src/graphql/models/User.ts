/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  timeFormat?: string;

  @Field({ nullable: true })
  avatar?: string;
}
