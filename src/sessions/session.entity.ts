import { Chat } from 'src/chats/chat.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Session extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true }) // LATER: generate uuid
    session_id: string;

    @Column({ type: 'bigint', unsigned: true })
    @ManyToOne(() => Chat, (chat) => chat.id)
    chat_id: number;
}