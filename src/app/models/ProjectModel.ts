import {
  Entity, Column, PrimaryColumn, OneToMany,
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

  @OneToMany(() => Task, (task) => task.project)
    tasks: Task[];
}

export default Project;
