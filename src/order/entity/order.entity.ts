import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    @Column()
    date: string;
    @Column()
    quantity: number;
    @Column()
    total: number;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}