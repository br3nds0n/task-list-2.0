import { Itask } from './Itask';

export interface ItaskRepository {
  create: (task: Itask) => Promise<Itask>
}
