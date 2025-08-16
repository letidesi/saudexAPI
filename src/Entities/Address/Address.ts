import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressMedicalCenter } from "../Associations/AddressMedicalCenter/AddressMedicalCenter";
import { User } from "../User/User";

@Entity("Address", {
    comment: "Tabela que armazena os endereços de usuários e centros médicos."
})
export class Address {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Identificador único do endereço (UUID)."
    })
    id!: string;

    @Column({
        type: "nvarchar",
        length: 255,
        nullable: false,
        comment: "Nome da rua ou logradouro"
    })
    street!: string;

    @Column({
        type: "nvarchar",
        length: 50,
        nullable: true,
        comment: "Número do endereço"
    })
    number?: string;

    @Column({
        type: "nvarchar",
        length: 100,
        nullable: true,
        comment: "Complemento do endereço"
    })
    complement?: string;

    @Column({
        type: "nvarchar",
        length: 100,
        nullable: false,
        comment: "Bairro do endereço"
    })
    neighborhood!: string;

    @Column({
        type: "nvarchar",
        length: 100,
        nullable: false,
        comment: "Cidade do endereço"
    })
    city!: string;

    @Column({
        type: "nvarchar",
        length: 50,
        nullable: false,
        comment: "Estado do endereço"
    })
    state!: string;

    @Column({
        type: "nvarchar",
        length: 10,
        nullable: false,
        comment: "CEP do endereço"
    })
    zipCode!: string;

    @OneToMany(() => AddressMedicalCenter, (m) => m.address)
    addressMedicalCenters!: AddressMedicalCenter[];

    @OneToOne(() => User, (u) => u.address)
    @JoinColumn({ name: "userId" })
    @Column({ type: "uuid", comment: "Chave estrangeira que referencia o usuário deste endereço." })
    user!: User;

    @CreateDateColumn({
        comment: "Data de criação do registro"
    })
    createdAt!: Date;

    @UpdateDateColumn({
        comment: "Data de atualização do registro"
    })
    updatedAt!: Date

    @DeleteDateColumn({
        comment: "Data de exclusão do registro"
    })
    deletedAt!: Date
}