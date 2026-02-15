import { Application } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { adminPaths } from '../docs/openapi';

const hideSensitive = process.env.SWAGGER_HIDE_SENSITIVE === 'true';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Saudex 2.0',
      version: '1.0.0',
      description: 'Documentação da API Saudex 2.0',
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || 'http://localhost:3000',
        description: 'Servidor Local',
      },
    ],
    paths: {
      ...adminPaths,
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Application) {
  app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      swaggerOptions: {
        filter: true,
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
      customCss: hideSensitive
        ? '.swagger-ui .model-title, .swagger-ui .prop-format, .swagger-ui .prop-type { display: none !important; }'
        : '',
    }),
  );
  console.log('Swagger can be accessed at http://localhost:3000/swagger');
}
