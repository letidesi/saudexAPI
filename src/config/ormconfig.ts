import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";

configDotenv();

export const AppDatabaseSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"]
});