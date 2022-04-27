import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Products1650987180581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'float'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
