import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTasks1648035341228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
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
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_tasks',
            columnNames: ['tasks'],
            referencedTableName: 'Tasks',
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
