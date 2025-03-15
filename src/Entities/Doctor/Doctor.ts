import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MedicalCenter } from "../MedicalCenter/MedicalCenter";
import { Gender } from "../../ValueObjects/Doctor/GenderEnum";

@Entity("Doctor")
export class Doctor
{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => MedicalCenter, (medicalCenter) => medicalCenter.doctors, { nullable: false, cascade: true })
    medicalCenter!: MedicalCenter;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    name!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    specialty!: string; 

    @Column({ type: "enum", enum: Gender, nullable: false })
    gender!: Gender; 

    @Column({ type: "int", nullable: false, default: 0 })
    availableTickets!: number;

}