import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mssql",
    username : process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: ["src/Entities/**/*.ts"],
    migrations: ["src/Migrations/**/*.ts"],
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
});