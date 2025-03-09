import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactAdmin } from "../Associations/ContactAdmin/ContactAdmin";
import { ContactMedicalCenter } from "../Associations/ContactMedicalCenter/ContactMedicalCenter";

@Entity("Contact")
export class Contact {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 50, nullable: true })
    phone?: string;

    @Column({ type: "nvarchar", length: 100, nullable: false })
    email!: string;

    @OneToMany(() => ContactAdmin, (c) => c.contact, { cascade: true })
    contactAdmins!: ContactAdmin[];

    @OneToMany(() => ContactMedicalCenter, (c) => c.contact, { cascade: true })
    contactMedicalCenters!: ContactMedicalCenter[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}