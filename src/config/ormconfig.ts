import { configDotenv } from 'dotenv';
import { DataSource } from 'typeorm';
import { config } from './config';

configDotenv();

export const AppDatabaseSource = new DataSource({
  type: 'mssql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
  extra: {
    authentication: {
      type: 'azure-active-directory-msi-app-service',
      options: {
        clientId: process.env.AZURE_CLIENT_ID,
        clientSecret: process.env.AZURE_CLIENT_SECRET,
        tenantId: process.env.AZURE_TENANT_ID,
      },
    },
  },
  synchronize: false,
  logging: true,
  entities: ['src/Entities/*.ts'],
  migrations: ['src/Migrations/**/*.ts'],
  options: {
    encrypt: config.database.encrypt,
    trustServerCertificate: config.database.trustServerCertificate,
  },
});
