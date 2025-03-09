import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressMedicalCenter } from "../Associations/AddressMedicalCenter/AddressMedicalCenter";

@Entity("Address")
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    street!: string;

    @Column({ type: "nvarchar", length: 50, nullable: true })
    number?: string;

    @Column({ type: "nvarchar", length: 100, nullable: true })
    complement?: string;

    @Column({ type: "nvarchar", length: 100, nullable: false })
    neighborhood!: string;

    @Column({ type: "nvarchar", length: 100, nullable: false })
    city!: string;

    @Column({ type: "nvarchar", length: 50, nullable: false })
    state!: string;

    @Column({ type: "nvarchar", length: 10, nullable: false })
    zipCode!: string;

    @OneToMany(() => AddressMedicalCenter, (m) => m.address)
    addresseMedicalCenters!: AddressMedicalCenter[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date

    @DeleteDateColumn()
    deletedAt!: Date
}