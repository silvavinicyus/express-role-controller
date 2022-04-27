import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class permissionRoles1650985703179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'permission_roles',
            columns: [                
                {
                    name: 'permission_id',
                    type: 'uuid'
                },
                {
                    name: 'role_id',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'permissionFK',
                    columnNames: ['permission_id'],
                    referencedTableName: 'permissions',
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
        await queryRunner.dropTable('permission_roles');
    }

}
