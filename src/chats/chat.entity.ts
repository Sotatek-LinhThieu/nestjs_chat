import { Admins } from 'src/admins/admin.entity';
import { Users } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Chat extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true })
    @ManyToOne(() => Users, (user) => user.id)
    user_creator_id: number;

    @Column({ type: 'bigint', unsigned: true })
    @ManyToOne(() => Admins, (admin) => admin.id)
    admin_creator_id: number;

    @Column({ type: 'varchar', length: 1000, nullable: false, default: 'common' })
    type: string;

    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    createMs: number;

    @Column({ type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    updateMs: number;

}