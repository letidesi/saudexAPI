import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MedicalCenterType } from "../../ValueObjects/Enum";
import { Address } from "../Address/Address";

@Entity("MedicalCenter")
export class MedicalCenter {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 255, nullable: false })
    name!: string;

    @Column({ type: "nvarchar", length: 50, nullable: false })
    type!: MedicalCenterType;

    @Column({ type: "nvarchar", length: 20, nullable: true })
    phone?: string;

    @ManyToMany(() => Address, (address) => address.medicalCenters, { nullable: false })
    address!: Address;

    @UpdateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updateCreatedAt!: Date
}
