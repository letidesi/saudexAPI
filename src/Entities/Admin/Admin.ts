import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("Admin")
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 200, nullable: false })
    name!: string;
    
    @Column({ type: "nvarchar", length: 255, unique: true, nullable: false})
    email!: string;

    @Column({type: "nvarchar", length: 255, nullable: false})
    passwordHash!: string

    @UpdateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updateCreatedAt!: Date
}