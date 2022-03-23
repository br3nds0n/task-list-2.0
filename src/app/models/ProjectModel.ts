import {
  Entity, Column, PrimaryColumn, ManyToOne, JoinColumn,
} from 'typeorm';

import Task from './TaskModel';

@Entity('Projects')
class Project {
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
