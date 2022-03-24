import { Injectable } from '@decorators/di';
import { getRepository } from 'typeorm';

import Project from '../models/ProjectModel';

import { Iproject } from '../interfaces/project/Iproject';
import { IProjectRepository } from '../interfaces/project/IProjectRepository';

@Injectable()
class ProjectRepository implements IProjectRepository {
  async create(project: Iproject): Promise<Iproject> {
    const repository = getRepository(Project);

    const newProject = repository.create(project);
    await repository.save(newProject);

    return newProject;
  }
}

export default ProjectRepository;
