/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  projectOwner: string;

  @Field()
  client: string;

  @Field((type) => Int)
  budget: number;
}
