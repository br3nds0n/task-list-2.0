import { Injectable } from '@decorators/di';
import { getRepository } from 'typeorm';

import Task from '../models/TaskModel';

import { ITaskRepository } from '../interfaces/task/ITaskRepository';
import { Itask } from '../interfaces/task/Itask';

@Injectable()
class TaskRepository implements ITaskRepository {
  async create(task: Itask): Promise<Itask> {
    const repository = getRepository(Task);

    const newTask = repository.create(task);
    await repository.save(newTask);

    return newTask;
  }
}

export default TaskRepository;
