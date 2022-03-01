import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Supplier {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    @Column()
    cif: string;
    @Column()
    name: string;
    @Column()
    address: string;
    @Column()
    phone: string;
    @Column()
    email: string;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}