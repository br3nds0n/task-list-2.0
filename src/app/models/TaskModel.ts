import { Entity, Column, PrimaryColumn } from 'typeorm';

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

  @Column()
    created_at: Date;

  @Column()
    updated_at: Date;
}

export default Task;
