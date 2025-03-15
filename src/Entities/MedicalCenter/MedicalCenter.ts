import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicalCenterType } from "../../ValueObjects/MedicalCenter/MedicalCenterEnum";
import { ContactMedicalCenter } from "../Associations/ContactMedicalCenter/ContactMedicalCenter";
import { AddressMedicalCenter } from "../Associations/AddressMedicalCenter/AddressMedicalCenter";
import { OperatingHour } from "../OperatingHour/Operatinghour";
import { Medication } from "../Medication/Medication";
import { Doctor } from "../Doctor/Doctor";

@Entity("MedicalCenter")
export class MedicalCenter {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    name!: string;

    @Column({ type: "nvarchar", length: 50, nullable: false })
    type!: MedicalCenterType;

    @Column({ type: "nvarchar", length: 20, unique: true, nullable: false })
    cnpj!: string;

    @OneToMany(() => AddressMedicalCenter, (m) => m.medicalCenter, { cascade: true })
    addresses!: AddressMedicalCenter[];

    @OneToMany(() => ContactMedicalCenter, (c) => c.medicalCenter, { cascade: true })
    contacts!: ContactMedicalCenter[];

    @OneToMany(() => OperatingHour, (o) => o.medicalCenter, { cascade: true })
    operatingHours!: OperatingHour[];

    @OneToMany(() => Doctor, (doctor) => doctor.medicalCenter, { cascade: true })
    doctors!: Doctor[];

    @OneToMany(() => Medication, (medication) => medication.medicalCenter, { cascade: true })
    medications!: Medication[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}
