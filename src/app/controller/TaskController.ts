import { Request, Response } from 'express';
import {
  Controller, Post, Get,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import TaskService from '../service/TaskService';
import { ITaskService } from '../interfaces/task/ITaskService';
import { Itask } from '../interfaces/task/Itask';

@Controller('/task')
class TaskController {
  private readonly taskService: ITaskService;

  constructor(@Inject(TaskService) taskService: ITaskService) {
    this.taskService = taskService;
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const Task:Itask = req.body;
      const NewTask = await this.taskService.create(Task);

      return res.status(200).json(NewTask);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default TaskController;
