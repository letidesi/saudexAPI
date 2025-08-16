import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ContactAdmin } from "../Associations/ContactAdmin/ContactAdmin";
import { ContactMedicalCenter } from "../Associations/ContactMedicalCenter/ContactMedicalCenter";
import { ContactUser } from "../Associations/ContactUser/ContactUser";

@Entity("Contact", {
    comment: "Tabela que armazena os contatos de usuários, administradores e centros médicos."
})
export class Contact {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único do contato (UUID)."
    })
    id!: string;

    @Column({
        type: "nvarchar",
        length: 50, nullable: true,
        comment: "Número de telefone/celular do contato."
    })
    phone?: string;

    @Column({
        type: "nvarchar",
        length: 100, nullable: false,
        comment: "Endereço de e-mail do contato."
    })
    email!: string;

    @OneToMany(() => ContactAdmin, (c) => c.contact, { cascade: true })
    contactAdmins!: ContactAdmin[];

    @OneToMany(() => ContactMedicalCenter, (c) => c.contact, { cascade: true })
    contactMedicalCenters!: ContactMedicalCenter[];

    @OneToMany(() => ContactUser, (c) => c.contact, { cascade: true })
    contactUsers!: ContactUser[];

    @CreateDateColumn({ comment: "Data de criação do registro." })
    createdAt!: Date;

    @UpdateDateColumn({ comment: "Data da última atualização do registro." })
    updatedAt!: Date;

    @DeleteDateColumn({ comment: "Data de exclusão do registro." })
    deletedAt!: Date;
}
