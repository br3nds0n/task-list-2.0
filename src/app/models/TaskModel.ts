import {
  Entity, Column, PrimaryColumn, CreateDateColumn,
} from 'typeorm';

@Entity('Tasks')
class Task {
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
