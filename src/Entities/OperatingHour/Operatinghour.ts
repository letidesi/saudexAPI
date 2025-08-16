import {
  Column,
  ManyToOne,
} from 'typeorm';
import { MedicalCenter } from '../MedicalCenter/MedicalCenter';
import { WeekDay } from '../../ValueObjects/OperatingHour/OperatingHourEnum';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

export class OperatingHour extends EntityWithTimestamps {
  @ManyToOne(() => MedicalCenter, (m) => m.operatingHours, {
    nullable: false,
    cascade: true,
  })
  medicalCenter!: MedicalCenter;

  @Column({
    type: 'nvarchar',
    length: 100,
    nullable: false,
    comment: 'Dia da semana do horário de funcionamento.',
  })
  dayOfWeek!: WeekDay;

  @Column({
    type: 'time',
    nullable: false,
    comment: 'Hora de abertura do centro médico.',
  })
  openTime!: string;

  @Column({
    type: 'time',
    nullable: false,
    comment: 'Hora de fechamento do centro médico.',
  })
  closeTime!: string;
}
