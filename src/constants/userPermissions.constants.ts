import { PermissionType } from './permissionType.enum';

export const userPermissions: PermissionType[] = [
  PermissionType.viewMedicalCenter,
  PermissionType.viewUser,
  PermissionType.updateOwnUser,
  PermissionType.deleteOwnUser,
];
