import { Admin } from '../../../models/admin/admin.model';
import { AdminDocument } from '../../../models/admin/admin.interface';
import { Types } from 'mongoose';

export class AdminFindOneService {
  async execute(id: string): Promise<AdminDocument> {
    const idTrimmed = id.trim();
    this.validate(idTrimmed);

    const objectId = new Types.ObjectId(idTrimmed);

    const admin = await Admin.findById(objectId);

    if (!admin) {
      throw new Error(`Admin not found for id: ${id}`);
    }

    return admin;
  }

  private validate(id: string): void {
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new Error('Invalid admin ID format');
    }
  }
}
