import { Inject, Injectable } from '@decorators/di';

import ProjectRepository from '../repository/ProjectRepository';

import { Iproject } from '../interfaces/project/Iproject';
import { IProjectService } from '../interfaces/project/IProjectService';
import { IProjectRepository } from '../interfaces/project/IProjectRepository';

@Injectable()
class ProjectService implements IProjectService {
  private readonly projectRepository: IProjectRepository;

  constructor(@Inject(ProjectRepository) projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async create(project: Iproject): Promise<Iproject> {
    const newProject = await this.projectRepository.create(project);

    return newProject;
  }

  async find(): Promise<Iproject[]> {
    const result = await this.projectRepository.find();
    return result;
  }
}

export default ProjectService;
