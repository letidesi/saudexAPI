import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../User/User";
import { Role } from "../../Role/Role";

@Entity("UserRoles")
export class UserRole {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => User, (u) => u.roles, { nullable: false })
    user!: User;

    @ManyToOne(() => Role, (r) => r.users, { nullable: false })
    role!: Role;
}