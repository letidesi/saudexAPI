import {
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { MedicalCenterType } from '../../ValueObjects/MedicalCenter/MedicalCenterEnum';
import { ContactMedicalCenter } from '../Associations/ContactMedicalCenter/ContactMedicalCenter';
import { AddressMedicalCenter } from '../Associations/AddressMedicalCenter/AddressMedicalCenter';
import { OperatingHour } from '../OperatingHour/Operatinghour';
import { Medication } from '../Medication/Medication';
import { Doctor } from '../Doctor/Doctor';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('MedicalCenter', {
  comment:
    'Tabela que armazena os centros médicos e suas informações principais.',
})
export class MedicalCenter extends EntityWithTimestamps {
  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Nome do centro médico.',
  })
  name!: string;

  @Column({
    type: 'nvarchar',
    length: 50,
    nullable: false,
    comment: 'Tipo do centro médico (ex: Hospital, Clínica, Laboratório).',
  })
  type!: MedicalCenterType;

  @Column({
    type: 'nvarchar',
    length: 20,
    unique: true,
    nullable: false,
    comment: 'CNPJ do centro médico.',
  })
  cnpj!: string;

  @OneToMany(() => AddressMedicalCenter, (m) => m.medicalCenter, {
    cascade: true,
  })
  addresses!: AddressMedicalCenter[];

  @OneToMany(() => ContactMedicalCenter, (c) => c.medicalCenter, {
    cascade: true,
  })
  contacts!: ContactMedicalCenter[];

  @OneToMany(() => OperatingHour, (o) => o.medicalCenter, { cascade: true })
  operatingHours!: OperatingHour[];

  @OneToMany(() => Doctor, (doctor) => doctor.medicalCenter, { cascade: true })
  doctors!: Doctor[];

  @OneToMany(() => Medication, (medication) => medication.medicalCenter, {
    cascade: true,
  })
  medications!: Medication[];
}
