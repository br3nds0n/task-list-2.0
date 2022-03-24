import { Request, Response } from 'express';
import { Controller, Post, Get } from '@decorators/express';
import { Inject } from '@decorators/di';

import ProjectService from '../service/ProjectService';
import { IProjectService } from '../interfaces/project/IProjectService';
import { Iproject } from '../interfaces/project/Iproject';

@Controller('/project')
class ProjectController {
  private readonly projectService: IProjectService;

  constructor(@Inject(ProjectService) projectService: IProjectService) {
    this.projectService = projectService;
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const project: Iproject = req.body;
      const result = await this.projectService.create(project);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  @Get('/')
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.projectService.find();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default ProjectController;
