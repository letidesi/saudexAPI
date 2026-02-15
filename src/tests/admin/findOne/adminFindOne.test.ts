import request from 'supertest';
import express from 'express';
import adminRoutes from '../../../features/admin/admin.routes';
import { Admin } from '../../../models/admin/admin.model';

const app = express();
app.use(express.json());
app.use('/api/admin', adminRoutes);

describe('Admin FindOne API Integration', () => {
  let adminId: string;

  beforeEach(async () => {
    const admin = await Admin.create({
      firstName: 'João',
      lastName: 'Silva',
      passwordHash: '36378333',
      contacts: [],
    });
    adminId = (admin._id as any).toString();
  });

  afterEach(async () => {
    await Admin.deleteMany({});
  });

  describe('GET /api/admin/:id', () => {
    it('should find admin by valid id', async () => {
      const response = await request(app).get(`/api/admin/${adminId}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.firstName).toBe('João');
      expect(response.body.data.lastName).toBe('Silva');
    }, 15000);

    it('should fail with invalid id format', async () => {
      const response = await request(app).get('/api/admin/invalid-id');

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    }, 15000);

    it('should return 404 for non-existent admin', async () => {
      const validButNonExistentId = '507f1f77bcf86cd799439011';
      const response = await request(app).get(
        `/api/admin/${validButNonExistentId}`,
      );

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    }, 15000);
  });
});
