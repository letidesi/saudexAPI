import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserRole } from '../Associations/UserRole/UserRole';
import { ContactUser } from '../Associations/ContactUser/ContactUser';
import { Address } from '../Address/Address';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('User', {
  comment: 'Tabela que armazena os usuários do sistema.',
})
export class User extends EntityWithTimestamps {
  @Column({
    type: 'nvarchar',
    length: 200,
    nullable: false,
    comment: 'Primeiro nome do usuário.',
  })
  firstName!: string;

  @Column({
    type: 'nvarchar',
    length: 200,
    nullable: false,
    comment: 'Sobrenome do usuário.',
  })
  lastName!: string;

  @Column({
    type: 'nvarchar',
    length: 255,
    nullable: false,
    comment: 'Hash da senha do usuário.',
  })
  passwordHash!: string;

  @OneToMany(() => ContactUser, (c) => c.user, { cascade: true })
  contactUsers!: ContactUser[];

  @OneToOne(() => Address, { cascade: true, nullable: true })
  @JoinColumn({ name: 'addressId' })
  @Column({
    type: 'uuid',
    nullable: true,
    comment: 'Chave estrangeira que referencia o endereço do usuário.',
  })
  address?: Address;

  @OneToMany(() => UserRole, (u) => u.user, { cascade: true })
  roles!: UserRole[];
}
