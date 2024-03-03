import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Team } from '../models/Team';
import { Project } from '../models/Project';

@Resolver()
export class TeamResolver {
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
    return newTeam;
  }

  @Mutation(() => Project)
  createProject(
    @Args('name') name: string,
    @Args('projectOwner') projectOwner: string,
    @Args('client') client: string,
    @Args('budget', { type: () => Int }) budget: number,
  ): Project {
    // Your logic to create a new project goes here
    // This is just a placeholder, replace it with your actual logic
    const newProject: Project = {
      id: 1, // Generate a new ID for the project
      name,
      projectOwner,
      client,
      budget,
    };
    return newProject;
  }
}
