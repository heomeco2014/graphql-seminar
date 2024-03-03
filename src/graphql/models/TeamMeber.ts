/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TeamMember {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  teamId: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  department: string;

  @Field()
  type: string;

  @Field((type) => Int)
  hourlyRate: number;

  @Field()
  access: string;

  @Field()
  email: string;
}
