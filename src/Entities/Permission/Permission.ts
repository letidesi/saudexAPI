import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PermissionType } from '../../ValueObjects/Permission/Type/PermissionTypeEnum';
import { RolePermission } from '../Associations/RolePermission/RolePermission';
import { EntityWithTimestamps } from '../../Helpers/EntityWithTimestamps';

@Entity('Permission', {
  comment: 'Tabela que armazena os tipos de permissões disponíveis no sistema.',
})
export class Permission extends EntityWithTimestamps {
  @Column({
    type: 'nvarchar',
    length: 100,
    unique: true,
    nullable: false,
    comment: 'Tipo de permissão.',
  })
  type!: PermissionType;

  @OneToMany(() => RolePermission, (r) => r.permission, { cascade: true })
  roles!: RolePermission[];
}
