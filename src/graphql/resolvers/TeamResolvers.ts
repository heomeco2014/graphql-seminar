/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Team } from '../models/Team';
import { mockTeams } from 'src/__mocks_data__/mocks';

@Resolver()
export class TeamResolver {
  @Query((returns) => Team)
  getTeamById(@Args('id', { type: () => Int }) id: number) {
    return mockTeams.find((team) => team.id === id);
  }
  @Query((returns) => [Team])
  getTeams() {
    return mockTeams;
  }

  @Mutation(() => Team)
  createTeam(
    @Args('name') name: string,
    @Args('teamOwner', { nullable: true }) teamOwner?: string,
  ): Team {
    // Your logic to create a new team goes here
    // This is just a placeholder, replace it with your actual logic
    const newTeam: Team = {
      id: 1, // Generate a new ID for the team
      name,
      teamOwner,
    };
    mockTeams.push(newTeam);
    return newTeam;
  }
}
