export const adminPaths = {
  '/api/admin': {
    post: {
      summary: 'Criar novo admin',
      tags: ['Admin'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['firstName', 'lastName', 'password'],
              properties: {
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                password: { type: 'string', format: 'password' },
                contactIds: { type: 'array', items: { type: 'string' } },
                addressId: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'Admin criado' },
        400: { description: 'Validação falhou' },
        500: { description: 'Erro servidor' },
      },
    },
  },
};
