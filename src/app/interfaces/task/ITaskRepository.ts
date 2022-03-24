import { Itask } from './Itask';

export interface ITaskRepository {
  create: (task: Itask) => Promise<Itask>
}
