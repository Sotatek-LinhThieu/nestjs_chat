import { Admin } from 'src/admins/admin.entity';
import { ChatItem } from 'src/chat-items/chat_item.entity';
import { Reaction } from 'src/reactions/reaction.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class ChatItemReaction extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', nullable: false, unsigned: true })
    @OneToOne(() => ChatItem, (chat_item) => chat_item.id)
    chat_item_id: number;

    @Column({ type: 'bigint', nullable: false, unsigned: true })
    @ManyToOne(() => Reaction, (reaction) => reaction.id)
    reaction_id: number;

    @Column({ type: 'bigint', unsigned: true })
    @ManyToOne(() => User, (user) => user.id)
    user_id: number;

    @Column({ type: 'bigint', unsigned: true })
    @ManyToOne(() => Admin, (admin) => admin.id)
    admin_id: number;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" })
    createMs: number;
}