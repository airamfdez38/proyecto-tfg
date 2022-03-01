import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Address {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    @Column()
    via: string;
    @Column()
    name: string;
    @Column()
    zip_code: string;
    @Column()
    city: string;
    @Column()
    country: string;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}