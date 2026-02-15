import { Admin } from '../../../models/admin/admin.model';
import { AdminDocument } from '../../../models/admin/admin.interface';
import { CreateAdminDto } from './adminCreate.dto';
import crypto from 'crypto';
import { Types } from 'mongoose';

export class AdminCreateService {
  async execute(createAdminDto: CreateAdminDto): Promise<AdminDocument> {
    this.validate(createAdminDto);

    const passwordHash = this.hashPassword(createAdminDto.password);

    const adminData = {
      firstName: createAdminDto.firstName.trim(),
      lastName: createAdminDto.lastName.trim(),
      passwordHash,
      contacts: this.parseContactIds(createAdminDto.contactIds),
      address: createAdminDto.addressId
        ? new Types.ObjectId(createAdminDto.addressId)
        : undefined,
    };

    const admin = await Admin.create(adminData);

    return admin;
  }

  private validate(createAdminDto: CreateAdminDto): void {
    const errors: string[] = [];

    if (
      !createAdminDto.firstName ||
      createAdminDto.firstName.trim().length === 0
    ) {
      errors.push('firstName is required');
    }
    if (createAdminDto.firstName && createAdminDto.firstName.length > 100) {
      errors.push('firstName must not exceed 100 characters');
    }

    if (
      !createAdminDto.lastName ||
      createAdminDto.lastName.trim().length === 0
    ) {
      errors.push('lastName is required');
    }
    if (createAdminDto.lastName && createAdminDto.lastName.length > 100) {
      errors.push('lastName must not exceed 100 characters');
    }

    if (!createAdminDto.password || createAdminDto.password.length === 0) {
      errors.push('password is required');
    }
    if (createAdminDto.password && createAdminDto.password.length < 8) {
      errors.push('password must be at least 8 characters');
    }

    if (createAdminDto.contactIds) {
      createAdminDto.contactIds.forEach((id, index) => {
        if (!Types.ObjectId.isValid(id)) {
          errors.push(`Invalid contact ID at index ${index}`);
        }
      });
    }

    if (
      createAdminDto.addressId &&
      !Types.ObjectId.isValid(createAdminDto.addressId)
    ) {
      errors.push('Invalid address ID');
    }

    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
  }

  private hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex');
  }
 
  private parseContactIds(contactIds?: string[]): Types.ObjectId[] {
    if (!contactIds || contactIds.length === 0) {
      return [];
    }
    return contactIds.map((id) => new Types.ObjectId(id));
  }
}
