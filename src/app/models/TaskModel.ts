import {
  Entity, Column, PrimaryColumn, CreateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('Tasks')
class Task {
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
    taskRelevance: number;

  @Column()
    completed: boolean;

  @CreateDateColumn()
    created_at: Date;

  @CreateDateColumn()
    updated_at: Date;
}

export default Task;
