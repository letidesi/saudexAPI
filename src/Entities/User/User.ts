import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../Associations/UserRole/UserRole";

@Entity("User")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 200, nullable: false })
    firstName!: string

    @Column({ type: "nvarchar", length: 200, nullable: false })
    lastName!: string

    @Column({ type: "nvarchar", length: 255, nullable: false })
    passwordHash!: string;

    // TODO: criar relação com contato e usuário
    // TODO: criar relação com endereço e usuário

    @OneToMany(() => UserRole, (u) => u.user, { cascade: true })
    roles!: UserRole[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}