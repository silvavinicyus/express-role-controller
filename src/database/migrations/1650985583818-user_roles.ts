import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userRoles1650985583818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_roles',
            columns: [                
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'role_id',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'userFK',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'roleFK',
                    columnNames: ['role_id'],
                    referencedTableName: 'roles',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_roles');
    }
}
