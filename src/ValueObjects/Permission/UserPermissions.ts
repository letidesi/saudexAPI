import { PermissionType } from './Type/PermissionTypeEnum';

export const userPermissions: PermissionType[] = [
  PermissionType.viewMedicalCenter,
  PermissionType.viewUser,
  PermissionType.updateOwnUser,
  PermissionType.deleteOwnUser,
];
