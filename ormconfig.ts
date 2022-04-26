export default {
  type: "postgres",
  host: "db_postgres",
  port: 5432,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  cli:{
    migrationsDir: "./src/database/migrations/",
  }
}