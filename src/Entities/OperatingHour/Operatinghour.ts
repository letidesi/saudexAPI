import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicalCenter } from "../MedicalCenter/MedicalCenter";
import { WeekDay } from "../../ValueObjects/OperatingHour/OperatingHour";

@Entity("OperatingHour")
export class OperatingHour {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => MedicalCenter, (m) => m.operatingHours, { nullable: false, cascade: true })
    medicalCenter!: MedicalCenter;

    @Column({ type: "nvarchar", length: 100, nullable: false })
    dayOfWeek!: WeekDay;

    @Column({ type: "time", nullable: false })
    openTime!: string;

    @Column({ type: "time", nullable: false })
    closeTime!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}