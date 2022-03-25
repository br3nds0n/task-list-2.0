import { Itask } from '../task/Itask';

export interface ITaskService {
    create: (task: Itask) => Promise<Itask>
}
