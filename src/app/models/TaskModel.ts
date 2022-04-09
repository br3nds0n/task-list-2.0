import {
  Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import Project from './ProjectModel';

@Entity('Tasks')
class Task {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
    id: string;

  @ManyToOne(() => Project, (project) => project.tasks)
    project: Project;

  @Column()
    title: string;

  @Column()
    taskRelevance: number;

  @Column()
    completed: boolean;

  @CreateDateColumn()
    created_at: Date;

  @CreateDateColumn()
    updated_at: Date;
}

export default Task;
