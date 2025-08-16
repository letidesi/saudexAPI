import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactAdmin } from "../Associations/ContactAdmin/ContactAdmin";
import { Address } from "../Address/Address";

@Entity("Admin", {
    comment: "Tabela que armazena os administradores do sistema."
})
export class Admin {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único do administrador (UUID)."
    })
    id!: string;

    @Column({ 
        type: "nvarchar", 
        length: 200, nullable: false, 
        comment: "Primeiro nome do administrador." 
    })
    firstName!: string;

    @Column({ 
        type: "nvarchar", length: 200, 
        nullable: false, 
        comment: "Sobrenome do administrador." 
    })
    lastName!: string;

    @Column({ 
        type: "nvarchar", 
        length: 255, nullable: false, 
        comment: "Hash da senha do administrador." 
    })
    passwordHash!: string;

    @OneToMany(() => ContactAdmin, (c) => c.admin, { cascade: true })
    contacts!: ContactAdmin[];

    @ManyToOne(() => Address, { nullable: true })
    address?: Address;

    @CreateDateColumn({ comment: "Data de criação do registro." })
    createdAt!: Date;

    @UpdateDateColumn({ comment: "Data da última atualização do registro." })
    updatedAt!: Date;

    @DeleteDateColumn({ comment: "Data de exclusão." })
    deletedAt!: Date;
}