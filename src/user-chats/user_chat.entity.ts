import { Chat } from 'src/chats/chat.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class UserChat extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true, nullable: false })
    @ManyToOne(() => Chat, (chat) => chat.id)
    chat_id: number;

    @Column({ type: 'bigint', unsigned: true, nullable: false })
    @ManyToOne(() => User, (user) => user.id)
    user_id: number;
}