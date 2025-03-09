import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../Associations/UserRole/UserRole";
import { ContactUser } from "../Associations/ContactUser/ContactUser";
import { Address } from "../Address/Address";

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

    @OneToMany(() => ContactUser, (c) => c.user, { cascade: true })
    contactUsers!: ContactUser[];

    @OneToOne(() => Address, {cascade: true, nullable: true })
    @JoinColumn({ name: "addressId"})
    address?: Address;

    @OneToMany(() => UserRole, (u) => u.user, { cascade: true })
    roles!: UserRole[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}