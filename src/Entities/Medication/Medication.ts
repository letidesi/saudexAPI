import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MedicalCenter } from "../MedicalCenter/MedicalCenter";
import { MedicationType } from "../../ValueObjects/Medication/MedicationEnum";


@Entity("Medications")
export class Medication {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => MedicalCenter, (medicalCenter) => medicalCenter.medications, { nullable: false, cascade: true })
    medicalCenter!: MedicalCenter;

    @Column({ type: "enum", enum: MedicationType, nullable: false })
    type!: MedicationType;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    name!: string;

    @Column({ type: "int", nullable: false, default: 0 })
    quantity!: number;
}
