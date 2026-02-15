import { Admin } from '../../../models/admin/admin.model';
import crypto from 'crypto';

// Mock data fixtures
const mockAdminData = {
  firstName: 'João',
  lastName: 'Silva',
  passwordHash: crypto.createHash('sha256').update('senha123').digest('hex'),
};

describe('Admin Create', () => {
  beforeEach(async () => {
    // Clear admin collection before each test
    await Admin.deleteMany({});
  }, 15000);

  afterAll(async () => {
    // Clean up after all tests
    await Admin.deleteMany({});
  }, 15000);

  describe('createAdmin', () => {
    it('should create a new admin with valid data', async () => {
      // Arrange
      const adminInput = { ...mockAdminData };

      // Act
      const admin = await Admin.create(adminInput);

      // Assert
      expect(admin).toBeDefined();
      expect(admin._id).toBeDefined();
      expect(admin.firstName).toBe(adminInput.firstName);
      expect(admin.lastName).toBe(adminInput.lastName);
      expect(admin.passwordHash).toBe(adminInput.passwordHash);
      expect(admin.contacts).toEqual([]);
      expect(admin.createdAt).toBeDefined();
      expect(admin.updatedAt).toBeDefined();
    }, 15000);

    it('should require firstName field', async () => {
      // Arrange
      const adminInput = {
        lastName: 'Silva',
        passwordHash: mockAdminData.passwordHash,
      };

      // Act & Assert
      try {
        await Admin.create(adminInput);
        fail('Should have thrown validation error');
      } catch (error: any) {
        expect(error.name).toBe('ValidationError');
        expect(error.errors.firstName).toBeDefined();
      }
    }, 15000);

    it('should require lastName field', async () => {
      // Arrange
      const adminInput = {
        firstName: 'João',
        passwordHash: mockAdminData.passwordHash,
      };

      // Act & Assert
      try {
        await Admin.create(adminInput);
        fail('Should have thrown validation error');
      } catch (error: any) {
        expect(error.name).toBe('ValidationError');
        expect(error.errors.lastName).toBeDefined();
      }
    }, 15000);

    it('should require passwordHash field', async () => {
      // Arrange
      const adminInput = {
        firstName: 'João',
        lastName: 'Silva',
      };

      // Act & Assert
      try {
        await Admin.create(adminInput);
        fail('Should have thrown validation error');
      } catch (error: any) {
        expect(error.name).toBe('ValidationError');
        expect(error.errors.passwordHash).toBeDefined();
      }
    }, 15000);

    it('should create admin with optional address field', async () => {
      // Arrange
      const adminInput = {
        ...mockAdminData,
        address: undefined, // Explicitly optional
      };

      // Act
      const admin = await Admin.create(adminInput);

      // Assert
      expect(admin.address).toBeUndefined();
    }, 15000);

    it('should initialize empty contacts array', async () => {
      // Arrange
      const adminInput = { ...mockAdminData };

      // Act
      const admin = await Admin.create(adminInput);

      // Assert
      expect(Array.isArray(admin.contacts)).toBe(true);
      expect(admin.contacts.length).toBe(0);
    }, 15000);

    it('should set timestamps on creation', async () => {
      // Arrange
      const adminInput = { ...mockAdminData };
      const beforeCreation = new Date();

      // Act
      const admin = await Admin.create(adminInput);
      const afterCreation = new Date();

      // Assert
      expect(admin.createdAt).toBeDefined();
      expect(admin.updatedAt).toBeDefined();
      expect(admin.createdAt.getTime()).toBeGreaterThanOrEqual(
        beforeCreation.getTime(),
      );
      expect(admin.createdAt.getTime()).toBeLessThanOrEqual(
        afterCreation.getTime(),
      );
      expect(admin.createdAt).toEqual(admin.updatedAt);
    }, 15000);

    it('should persist admin to database', async () => {
      // Arrange
      const adminInput = { ...mockAdminData };

      // Act
      const createdAdmin = await Admin.create(adminInput);
      const retrievedAdmin = await Admin.findById(createdAdmin._id);

      // Assert
      expect(retrievedAdmin).toBeDefined();
      expect(retrievedAdmin?.firstName).toBe(adminInput.firstName);
      expect(retrievedAdmin?.lastName).toBe(adminInput.lastName);
      expect(retrievedAdmin?.passwordHash).toBe(adminInput.passwordHash);
    }, 15000);

    it('should create multiple admins independently', async () => {
      // Arrange
      const firstAdminInput = {
        firstName: 'João',
        lastName: 'Silva',
        passwordHash: crypto
          .createHash('sha256')
          .update('senha123')
          .digest('hex'),
      };

      const secondAdminInput = {
        firstName: 'Maria',
        lastName: 'Santos',
        passwordHash: crypto
          .createHash('sha256')
          .update('senha456')
          .digest('hex'),
      };

      // Act
      const firstAdmin = await Admin.create(firstAdminInput);
      const secondAdmin = await Admin.create(secondAdminInput);

      // Assert
      expect(firstAdmin._id).not.toEqual(secondAdmin._id);
      expect(firstAdmin.firstName).not.toBe(secondAdmin.firstName);

      const allAdmins = await Admin.find({});
      expect(allAdmins.length).toBe(2);
    }, 15000);

    it('should handle special characters in name fields', async () => {
      // Arrange
      const adminInput = {
        firstName: "João d'Ávila",
        lastName: "O'Brien-Silva",
        passwordHash: mockAdminData.passwordHash,
      };

      // Act
      const admin = await Admin.create(adminInput);

      // Assert
      expect(admin.firstName).toBe(adminInput.firstName);
      expect(admin.lastName).toBe(adminInput.lastName);
    }, 15000);

    it('should handle long name strings', async () => {
      // Arrange
      const longName =
        'VeryLongFirstNameWithManyCharactersForTesting'.substring(0, 100);
      const adminInput = {
        firstName: longName,
        lastName: 'Silva',
        passwordHash: mockAdminData.passwordHash,
      };

      // Act
      const admin = await Admin.create(adminInput);

      // Assert
      expect(admin.firstName).toBe(longName);
      expect(admin.firstName.length).toBeLessThanOrEqual(100);
    }, 15000);
  });
});
