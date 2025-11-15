import "dotenv/config";

export const config = {
  server: {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
  },

  mongo: {
    uri: process.env.MONGO_URI || "",
  },

  swagger: {
    serverUrl: process.env.SWAGGER_SERVER_URL,
    hideSensitive: process.env.SWAGGER_HIDE_SENSITIVE === "true",
  },
};
