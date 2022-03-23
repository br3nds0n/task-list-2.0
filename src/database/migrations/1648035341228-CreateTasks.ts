import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTasks1648035341228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Projects',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'tasks',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_tasks',
            columnNames: ['tasks'],
            referencedTableName: 'Task',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Projects');
  }
}
