import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MedicalCenter } from '../../MedicalCenter/MedicalCenter';
import { Contact } from '../../Contact/Contact';

@Entity('ContactMedicalCenter')
export class ContactMedicalCenter {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => MedicalCenter, (m) => m.contacts, { nullable: false })
  medicalCenter!: MedicalCenter;

  @ManyToOne(() => Contact, (c) => c.contactMedicalCenters, { nullable: false })
  contact!: Contact;
}
