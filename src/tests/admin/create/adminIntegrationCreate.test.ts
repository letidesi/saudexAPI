import request from 'supertest';
import express from 'express';
import adminCreateRoutes from '../../../features/admin/create/adminCreate.routes';
import { Admin } from '../../../models/admin/admin.model';

const app = express();
app.use(express.json());
app.use('/api/admin', adminCreateRoutes);

describe('Admin Create API Integration', () => {
  afterEach(async () => {
    // Clean up after each test
    await Admin.deleteMany({});
  });

  describe('POST /api/admin', () => {
    it('should successfully create a new admin', async () => {
      const adminData = {
        firstName: 'João',
        lastName: 'Silva',
        password: 'mySec@rePassword123',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Admin created successfully');
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.firstName).toBe('João');
      expect(response.body.data.lastName).toBe('Silva');
      expect(response.body.data).toHaveProperty('createdAt');
      expect(response.body.data).toHaveProperty('updatedAt');
      expect(response.body.data).not.toHaveProperty('passwordHash');
    }, 15000);

    it('should fail when firstName is missing', async () => {
      const adminData = {
        lastName: 'Silva',
        password: 'mySec@rePassword123',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    }, 15000);

    it('should fail when lastName is missing', async () => {
      const adminData = {
        firstName: 'João',
        password: 'mySec@rePassword123',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    }, 15000);

    it('should fail when password is missing', async () => {
      const adminData = {
        firstName: 'João',
        lastName: 'Silva',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    }, 15000);

    it('should fail when password is less than 8 characters', async () => {
      const adminData = {
        firstName: 'João',
        lastName: 'Silva',
        password: 'short',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Validation failed');
    }, 15000);

    it('should create admin with optional contactIds', async () => {
      const adminData = {
        firstName: 'João',
        lastName: 'Silva',
        password: 'mySec@rePassword123',
        contactIds: ['507f1f77bcf86cd799439011'],
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(201);
      expect(response.body.data.contacts).toEqual(['507f1f77bcf86cd799439011']);
    }, 15000);

    it('should fail with invalid contactId format', async () => {
      const adminData = {
        firstName: 'João',
        lastName: 'Silva',
        password: 'mySec@rePassword123',
        contactIds: ['invalid-id'],
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    }, 15000);

    it('should trim whitespace from names', async () => {
      const adminData = {
        firstName: '  João  ',
        lastName: '  Silva  ',
        password: 'mySec@rePassword123',
      };

      const response = await request(app).post('/api/admin').send(adminData);

      expect(response.status).toBe(201);
      expect(response.body.data.firstName).toBe('João');
      expect(response.body.data.lastName).toBe('Silva');
    }, 15000);
  });
});
