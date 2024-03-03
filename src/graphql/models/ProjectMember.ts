/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectMember {
  @Field((type) => Int)
  id: number;

  @Field()
  projectId: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
