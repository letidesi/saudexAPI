import { Entity, Column, ManyToOne } from 'typeorm';
import { MedicalCenter } from '../MedicalCenter/MedicalCenter';
import { MedicationType } from '../../ValueObjects/Medication/MedicationEnum';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('Medications', {
  comment:
    'Tabela que armazena os medicamentos cadastrados nos centros médicos.',
})
export class Medication extends EntityWithTimestamps {
  @ManyToOne(
    () => MedicalCenter,
    (medicalCenter) => medicalCenter.medications,
    { nullable: false, cascade: true },
  )
  medicalCenter!: MedicalCenter;

  @Column({
    type: 'enum',
    enum: MedicationType,
    nullable: false,
    comment: 'Tipo de medicamento (ex: Vacina, Medicamentos e Insulina).',
  })
  type!: MedicationType;

  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Nome do medicamento.',
  })
  name!: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
    comment: 'Quantidade disponível do medicamento no centro médico.',
  })
  quantity!: number;
}
