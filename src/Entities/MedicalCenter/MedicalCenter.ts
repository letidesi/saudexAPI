import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicalCenterType } from "../../ValueObjects/Enum";
import { ContactMedicalCenter } from "../Associations/ContactMedicalCenter/ContactMedicalCenter";
import { AddressMedicalCenter } from "../Associations/AddressMedicalCenter/AddressMedicalCenter";

@Entity("MedicalCenter")
export class MedicalCenter {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    name!: string;

    @Column({ type: "nvarchar", length: 50, nullable: false })
    type!: MedicalCenterType;

    @OneToMany(() => AddressMedicalCenter, (m) => m.medicalCenter, { cascade: true })
    addresses!: AddressMedicalCenter[];

    @OneToMany(() => ContactMedicalCenter, (c) => c.medicalCenter, { cascade: true }) // Agora via tabela intermediária
    contacts!: ContactMedicalCenter[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}
