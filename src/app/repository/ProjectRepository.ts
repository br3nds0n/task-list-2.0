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

  async find(): Promise<Iproject[]> {
    const repository = getRepository(Project);
    const result = repository.find({
      relations: ['task'],
    });
    return result;
  }

  async findId(id: string): Promise<Iproject> {
    const repository = getRepository(Project);
    const result = repository.findOne(id);
    return result;
  }

  async updated(id: string, payload: Iproject): Promise<void> {
    const repository = getRepository(Project);
    repository.update(id, payload);
  }

  async delete(id:string): Promise<void> {
    const repository = getRepository(Project);
    repository.delete(id);
  }
}

export default ProjectRepository;
