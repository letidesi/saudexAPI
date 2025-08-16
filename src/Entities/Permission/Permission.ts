import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PermissionType } from "../../ValueObjects/Permission/Type/PermissionTypeEnum";
import { RolePermission } from "../Associations/RolePermission/RolePermission";

@Entity("Permission", {
    comment: "Tabela que armazena os tipos de permissões disponíveis no sistema."
})
export class Permission {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único da permissão (UUID)."
    })
    id!: string;

    @Column({
        type: "nvarchar",
        length: 100, unique: true,
        nullable: false,
        comment: "Tipo de permissão."
    })
    type!: PermissionType;

    @OneToMany(() => RolePermission, (r) => r.permission, { cascade: true })
    roles!: RolePermission[];

    @CreateDateColumn({ comment: "Data de criação do registro." })
    createdAt!: Date;

    @UpdateDateColumn({ comment: "Data da última atualização do registro." })
    updatedAt!: Date;

    @DeleteDateColumn({ comment: "Data de exclusão lógica (soft delete)." })
    deletedAt!: Date;
}