import { Iproject } from './Iproject';

export interface IProjectService {
  create: (task: Iproject) => Promise<Iproject>
}
