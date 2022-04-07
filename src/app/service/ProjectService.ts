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

  async findId(id: string): Promise<Iproject> {
    const result = await this.projectRepository.findId(id);
    return result;
  }

  async updated(id: string, payload: Iproject): Promise<void> {
    const result = this.projectRepository.updated(id, payload);
    return result;
  }

  async delete(id: string): Promise<void> {
    const result = this.projectRepository.delete(id);
    return result;
  }
}

export default ProjectService;
