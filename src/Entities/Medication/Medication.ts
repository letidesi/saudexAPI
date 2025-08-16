import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { MedicalCenter } from "../MedicalCenter/MedicalCenter";
import { MedicationType } from "../../ValueObjects/Medication/MedicationEnum";

@Entity("Medications", {
    comment: "Tabela que armazena os medicamentos cadastrados nos centros médicos."
})
export class Medication {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único do medicamento (UUID)."
    })
    id!: string;

    @ManyToOne(() => MedicalCenter, (medicalCenter) => medicalCenter.medications, { nullable: false, cascade: true })
    medicalCenter!: MedicalCenter;

    @Column({ 
        type: "enum", 
        enum: MedicationType, 
        nullable: false, 
        comment: "Tipo de medicamento (ex: Vacina, Medicamentos e Insulina)." })
    type!: MedicationType;

    @Column({ 
        type: "nvarchar", 
        length: 255, nullable: false, 
        comment: "Nome do medicamento." })
    name!: string;

    @Column({ 
        type: "int", 
        nullable: false, 
        default: 0, 
        comment: "Quantidade disponível do medicamento no centro médico." })
    quantity!: number;
}
