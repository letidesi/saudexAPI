import "dotenv/config";

export const config = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
  },

  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 1433,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    encrypt: true,
    trustServerCertificate: true
  },

  swagger: {
    serverUrl: process.env.SWAGGER_SERVER_URL || "http://localhost:3000/api",
    hideSensitive: process.env.SWAGGER_HIDE_SENSITIVE === "true",
  },
};
