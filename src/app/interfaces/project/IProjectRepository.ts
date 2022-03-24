import { Iproject } from './Iproject';

export interface IProjectRepository {
  create: (task: Iproject) => Promise<Iproject>
}
