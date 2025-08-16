import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleType } from '../../ValueObjects/Role/RoleEnum';
import { UserRole } from '../Associations/UserRole/UserRole';
import { RolePermission } from '../Associations/RolePermission/RolePermission';

@Entity('Role', {
  comment:
    'Tabela que armazena os papéis (roles) do sistema, como Administrador, Usuário, Convidado, etc.',
})
export class Role {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Identificador único do papel (UUID).',
  })
  id!: string;

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

  @CreateDateColumn({ comment: 'Data de criação do registro.' })
  createdAt!: Date;

  @UpdateDateColumn({ comment: 'Data da última atualização do registro.' })
  updatedAt!: Date;

  @DeleteDateColumn({ comment: 'Data de exclusão.' })
  deletedAt!: Date;
}
