import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("Admin")
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "nvarchar", length: 200 })
    name!: string;
    
    @Column({ type: "nvarchar", length: 255, unique: true})
    email!: string;

    @Column({type: "nvarchar", length: 255})
    passwordHash!: string

    @UpdateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updateCreatedAt!: Date
}