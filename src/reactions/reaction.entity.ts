import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Reaction extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    link: string;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    createMs: number;
}