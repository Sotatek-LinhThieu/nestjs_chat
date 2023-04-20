import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ length: 50, type: 'varchar', nullable: false })
    name: string;

    @Column({ length: 100, type: 'varchar', nullable: false })
    password: string;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    createMs: number;

    @Column({ length: 6, type: 'timestamp', nullable: false, default: () => "CURRENT_TIMESTAMP" }) // missing DEFAULT_GENERATED
    updateMs: number;
}