import { User } from 'src/graphql/models/User';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'test',
    email: 'test1@gmail.com',
    password: 'test1password',
    timeFormat: '12h',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'example',
    email: 'example2@gmail.com',
    password: 'example2password',
    timeFormat: '24h',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'user',
    email: 'user3@gmail.com',
    password: 'user3password',
    timeFormat: '12h',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'demo',
    email: 'demo4@gmail.com',
    password: 'demo4password',
    timeFormat: '24h',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

export const mockProjects = [];
export const mockTeams = [];
