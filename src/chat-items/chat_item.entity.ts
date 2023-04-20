import { Admin } from 'src/admins/admin.entity';
import { Chat } from 'src/chats/chat.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class ChatItem extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true, nullable: false })
    @ManyToOne(() => Chat, (chat) => chat.id)
    chat_id: number;

    @Column({ type: 'tinyint', default: 0, nullable: true })
    is_admin: number;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    @ManyToOne(() => User, (user) => user.id)
    user_creator_id: number;

    @Column({ type: 'bigint', unsigned: true, nullable: true })
    @ManyToOne(() => Admin, (admin) => admin.id)
    admin_creator_id: number;

    @Column({ type: 'varchar', length: 1000, nullable: false })
    content: string;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    createMs: number;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    updateMs: number;
}