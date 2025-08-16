import {
  Column,
  Entity,
  OneToMany,
} from 'typeorm';
import { RoleType } from '../../ValueObjects/Role/RoleEnum';
import { UserRole } from '../Associations/UserRole/UserRole';
import { RolePermission } from '../Associations/RolePermission/RolePermission';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('Role', {
  comment:
    'Tabela que armazena os papéis (roles) do sistema, como Administrador, Usuário, Convidado, etc.',
})
export class Role extends EntityWithTimestamps {
  @Column({
    type: 'nvarchar',
    length: 100,
    unique: true,
    nullable: false,
    default: RoleType.GUEST,
    comment: 'Nome único do papel do usuário (ex: ADMIN, GUEST).',
  })
  type!: RoleType;

  @OneToMany(() => UserRole, (u) => u.role, { cascade: true })
  users!: UserRole[];

  @OneToMany(() => RolePermission, (r) => r.role, { cascade: true })
  permissions!: RolePermission[];
}
