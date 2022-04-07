import { Request, Response } from 'express';
import {
  Controller, Post, Get, Put, Delete,
} from '@decorators/express';
import { Inject } from '@decorators/di';

import ProjectService from '../service/ProjectService';
import { IProjectService } from '../interfaces/project/IProjectService';
import { Iproject } from '../interfaces/project/Iproject';

import ValidationBodyProject from '../validations/ProjectValidation/ProjectValidationBody';
import ValidationFindProject from '../validations/ProjectValidation/ProjectValidationFind';
import ValidationUUID from '../validations/UuidValidation';

@Controller('/project')
class ProjectController {
  private readonly projectService: IProjectService;

  constructor(@Inject(ProjectService) projectService: IProjectService) {
    this.projectService = projectService;
  }

  @Post('/', [ValidationBodyProject])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const project: Iproject = req.body;
      const result = await this.projectService.create(project);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Get('/', [ValidationFindProject])
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.projectService.find();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Get('/:id', [ValidationUUID, ValidationFindProject])
  async findId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await this.projectService.findId(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Put('/:id', [ValidationUUID, ValidationBodyProject])
  async updated(req: Request, res:Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload = req.body;

      this.projectService.updated(id, payload);
      return res.status(200).json('updated sucess');
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  @Delete('/:id')
  async delete(req: Request, res:Response): Promise<Response> {
    try {
      const { id } = req.params;

      this.projectService.delete(id);
      return res.status(200).json('deleted sucess');
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default ProjectController;
