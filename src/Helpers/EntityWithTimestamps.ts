import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export abstract class EntityWithTimestamps {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Identificador único do registro (UUID).',
  })
  id!: string;

  @CreateDateColumn({ comment: 'Data de criação do registro.' })
  createdAt!: Date;

  @UpdateDateColumn({ comment: 'Data da última atualização do registro.' })
  updatedAt!: Date;

  @DeleteDateColumn({ comment: 'Data de exclusão lógica (soft delete).' })
  deletedAt!: Date;
}
