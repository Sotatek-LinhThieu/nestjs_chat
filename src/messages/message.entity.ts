import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    box_id: number;

    @Column()
    sender_id: number;

    @Column()
    sent_time: Date;

    @Column({ default: '' })
    content: string;

    @Column()
    react_id: number;
}