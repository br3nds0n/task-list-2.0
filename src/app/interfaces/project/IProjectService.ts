import { Iproject } from './Iproject';

export interface IProjectService {
  create: (project: Iproject) => Promise<Iproject>
  find: () => Promise<Iproject[]>
  findId: (id) => Promise<Iproject>
}
