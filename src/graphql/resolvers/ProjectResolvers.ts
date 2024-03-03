/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project } from '../models/Project';
import { mockProjects } from 'src/__mocks_data__/mocks';
export let mockProjectId = 4;
@Resolver()
export class ProjectResolver {
  @Query((returns) => Project)
  getProjectById(@Args('id', { type: () => Int }) id: number) {
    return mockProjects.find((project) => project.id === id);
  }
  @Query((returns) => [Project])
  getProjects() {
    return mockProjects;
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
      id: ++mockProjectId, // Generate a new ID for the project
      name,
      projectOwner,
      client,
      budget,
    };
    mockProjects.push(newProject);
    return newProject;
  }
}
