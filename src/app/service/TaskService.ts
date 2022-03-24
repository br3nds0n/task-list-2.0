import { Inject, Injectable } from '@decorators/di';
import { ItaskRepository } from '../interfaces/task/ITaskRepository';

import TaskRepository from '../repository/TaskRepository';
import { Itask } from '../interfaces/task/Itask';
import { ITaskService } from '../interfaces/task/ITaskService';

@Injectable()
class TaskService implements ITaskService {
  private readonly taskRepository: ItaskRepository;

  constructor(@Inject(TaskRepository) taskReporitory: ItaskRepository) {
    this.taskRepository = taskReporitory;
  }

  async create(task: Itask): Promise<Itask> {
    const NewTask = this.taskRepository.create(task);
    return NewTask;
  }
}

export default TaskService;
