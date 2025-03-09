import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../Role/Role";
import { Permission } from "../../Permission/Permission";

@Entity("RolePermission")
export class RolePermission {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => Role, (r) => r.permissions, { nullable: false })
    role!: Role;

    @ManyToOne(() => Permission, (p) => p.roles, { nullable: false })
    permission!: Permission;
}