import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleType } from "../../ValueObjects/Role/RoleEnum";
import { UserRole } from "../Associations/UserRole/UserRole";
import { RolePermission } from "../Associations/RolePermission/RolePermission";

@Entity("Role")
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 100, unique: true, nullable: false, default: RoleType.GUEST })
    type!: RoleType;

    @OneToMany(() => UserRole, (u) => u.role, { cascade: true })
    users!: UserRole[];

    @OneToMany(() => RolePermission, (r) => r.role, { cascade: true })
    permissions!: RolePermission[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}