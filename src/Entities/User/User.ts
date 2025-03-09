import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 200, nullable: false})
    firstName!: string

    @Column({ type: "nvarchar", length: 200, nullable: false})
    lastName!: string

    @Column({ type: "nvarchar", length: 255, nullable: false})
    passwordHash!: string;

    // TODO: criar relação com contato e usuário
    // TODO: criar relação com endereço e usuário

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}