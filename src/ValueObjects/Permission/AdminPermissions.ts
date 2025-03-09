import { PermissionType } from "./Type/PermissionTypeEnum";

const adminPermissions: PermissionType[] = [
    PermissionType.createMedicalCenter,
    PermissionType.updateMedicalCenter,
    PermissionType.deleteMedicalCenter,
    PermissionType.viewMedicalCenter,

    PermissionType.createUser,
    PermissionType.updateUser,
    PermissionType.deleteUser,
    PermissionType.viewUser,

    PermissionType.manageRoles,
    PermissionType.managePermissions,
    PermissionType.viewReports,
];