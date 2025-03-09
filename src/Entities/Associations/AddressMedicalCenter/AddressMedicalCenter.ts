import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MedicalCenter } from "../../MedicalCenter/MedicalCenter";
import { Address } from "../../Address/Address";

@Entity("MedicalCenterAddress")
export class AddressMedicalCenter {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => MedicalCenter, (m) => m.addresses, { nullable: false })
    medicalCenter!: MedicalCenter;

    @ManyToOne(() => Address, (a) => a.addresseMedicalCenters, { nullable: false })
    address!: Address;

    @Column({ type: "boolean", default: false })
    isPrincipal!: boolean
}
