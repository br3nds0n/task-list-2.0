import {
  Entity, Column, PrimaryColumn, ManyToOne, JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import Task from './TaskModel';

@Entity('Projects')
class Project {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
    id: string;

  @Column()
    title: string;

  @Column()
    description: string;

  @Column()
    tasks: string;

  @ManyToOne(() => Task)
  @JoinColumn({ name: 'tasks' })
    task: Task;
}

export default Project;
