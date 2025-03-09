import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../User/User";
import { Contact } from "../../Contact/Contact";

@Entity("ContactUsers")
export class ContactUser {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User, (u) => u.contactUsers, { nullable: false })
    user!: User;

    @ManyToOne(() => Contact, (c) => c.contactUsers, { nullable: false })
    contact!: Contact;
}