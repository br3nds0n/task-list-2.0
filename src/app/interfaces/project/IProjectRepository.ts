import { Iproject } from './Iproject';

export interface IProjectRepository {
  create: (project: Iproject) => Promise<Iproject>
  find: () => Promise<Iproject[]>
  findId: (id: string) => Promise<Iproject>
}
