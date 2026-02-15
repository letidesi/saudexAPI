import { AdminDocument } from '../../../models/admin/admin.interface';
import { AdminResponseDto } from './adminFindOne.dto';

export class AdminFindOneMapper {
  static toResponseDto(admin: AdminDocument): AdminResponseDto {
    return {
      id: (admin._id as any).toString(),
      firstName: admin.firstName,
      lastName: admin.lastName,
      contacts: admin.contacts.map((id) => id.toString()),
      address: admin.address?.toString(),
      createdAt: admin.createdAt,
      updatedAt: admin.updatedAt,
    };
  }
}
