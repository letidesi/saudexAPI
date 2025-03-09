import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactAdmin } from "../Associations/ContactAdmin/ContactAdmin";
import { Address } from "../Address/Address";

@Entity("Admin")
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 200, nullable: false })
    firstName!: string;

    @Column({ type: "nvarchar", length: 200, nullable: false })
    lastName!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    passwordHash!: string

    @OneToMany(() => ContactAdmin, (c) => c.admin, { cascade: true })
    contacts!: ContactAdmin[];

    @ManyToOne(() => Address, { nullable: true })
    address?: Address;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}