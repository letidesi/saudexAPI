import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PermissionType } from "../../ValueObjects/Permission/Type/PermissionTypeEnum";
import { RolePermission } from "../Associations/RolePermission/RolePermission";

@Entity("Permission")
export class Permission {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 100, unique: true, nullable: false })
    type!: PermissionType

    @OneToMany(() => RolePermission, (r) => r.permission, { cascade: true })
    roles!: RolePermission[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}