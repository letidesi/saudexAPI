import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    // @OneToMany(() => MedicalCenter, (medicalCenter) => medicalCenter.address)
    // medicalCenters!: MedicalCenter[];

    @UpdateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updateCreatedAt!: Date
}