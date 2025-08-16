import { Column, Entity, ManyToOne } from 'typeorm';
import { MedicalCenter } from '../MedicalCenter/MedicalCenter';
import { Gender } from '../../ValueObjects/Doctor/GenderEnum';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('Doctor', {
  comment: 'Tabela que armazena os médicos associados a centros médicos.',
})
export class Doctor extends EntityWithTimestamps {
  @ManyToOne(() => MedicalCenter, (medicalCenter) => medicalCenter.doctors, {
    nullable: false,
  })
  medicalCenter!: MedicalCenter;

  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Nome completo do médico.',
  })
  name!: string;

  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Especialidade médica do profissional.',
  })
  specialty!: string;

  @Column({
    type: 'nvarchar',
    enum: Gender,
    length: 50,
    nullable: false,
    comment: 'Gênero do médico.',
  })
  gender!: Gender;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
    comment: 'Quantidade de tickets disponíveis para agendamento.',
  })
  availableTickets!: number;
}
