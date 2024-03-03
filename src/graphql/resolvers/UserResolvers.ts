/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks_data__/mockUsers';
export let mockId = 4;

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      username: 'test',
      displayName: 'Test User',
    };
  }
  @Query((returns) => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return mockUsers;
  }

  @Mutation((returns) => User)
  createUser(
    @Args('username') username: string,
    @Args('displayname', { nullable: true }) displayName: string,
  ) {
    const newUser = {
      id: mockId++,
      username,
      displayName,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
