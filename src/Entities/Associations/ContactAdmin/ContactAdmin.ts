import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from '../../Admin/Admin';
import { Contact } from '../../Contact/Contact';

@Entity('ContactAdmin')
export class ContactAdmin {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Admin, (a) => a.contacts, { nullable: false })
  admin!: Admin;

  @ManyToOne(() => Contact, (c) => c.contactAdmins, { nullable: false })
  contact!: Contact;
}
