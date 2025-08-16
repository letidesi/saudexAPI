import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicalCenter } from "../MedicalCenter/MedicalCenter";
import { WeekDay } from "../../ValueObjects/OperatingHour/OperatingHourEnum";

export class OperatingHour {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único do horário de funcionamento (UUID)."
    })
    id!: string;

    @ManyToOne(() => MedicalCenter, (m) => m.operatingHours, { nullable: false, cascade: true })
    medicalCenter!: MedicalCenter;

    @Column({ 
        type: "nvarchar", 
        length: 100, nullable: false, 
        comment: "Dia da semana do horário de funcionamento." })
    dayOfWeek!: WeekDay;

    @Column({ 
        type: "time", 
        nullable: false, 
        comment: "Hora de abertura do centro médico." })
    openTime!: string;

    @Column({ 
        type: "time", 
        nullable: false, 
        comment: "Hora de fechamento do centro médico." })
    closeTime!: string;

    @CreateDateColumn({ comment: "Data de criação do registro." })
    createdAt!: Date;

    @UpdateDateColumn({ comment: "Data da última atualização do registro." })
    updatedAt!: Date;

    @DeleteDateColumn({ comment: "Data de exclusão." })
    deletedAt!: Date;
}