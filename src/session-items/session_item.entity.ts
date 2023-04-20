import { Session } from 'src/sessions/session.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class SessionItem extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true, nullable: false })
    @ManyToOne(() => Session, (session) => session.id)
    session_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false }) // LATER: generate uuid
    session_item_id: number;
}