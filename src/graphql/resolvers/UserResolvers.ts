/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks_data__/mocks';
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
    @Args('name') name: string,
    @Args('email', { nullable: true }) email: string,
  ) {
    const newUser = {
      id: mockId++,
      name: 'Minh' + mockId,
      email: 'minh' + mockId + '@gmail.com',
      password: 'minh' + mockId + 'password',
      timeFormat: '12h',
      avatar: 'https://i.pravatar.cc/150?img=' + mockId,
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
