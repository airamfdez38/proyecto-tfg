import { Entity,Column,PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Invoice{
    @PrimaryGeneratedColumn('uuid')
    uuid: string;
    @Column()
    date: string;
    @Column()
    amount: number;
    @Column()
    payment_method: string;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn()
    created_at: string;
}