import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ContactAdmin } from '../Associations/ContactAdmin/ContactAdmin';
import { Address } from '../Address/Address';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('Admin', {
  comment: 'Tabela que armazena os administradores do sistema.',
})
export class Admin extends EntityWithTimestamps {
  @Column({
    type: 'nvarchar',
    length: 200,
    nullable: false,
    comment: 'Primeiro nome do administrador.',
  })
  firstName!: string;

  @Column({
    type: 'nvarchar',
    length: 200,
    nullable: false,
    comment: 'Sobrenome do administrador.',
  })
  lastName!: string;

  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Hash da senha do administrador.',
  })
  passwordHash!: string;

  @OneToMany(() => ContactAdmin, (c) => c.admin, { cascade: true })
  contacts!: ContactAdmin[];

  @ManyToOne(() => Address, { nullable: true })
  address?: Address;
}
