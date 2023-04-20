import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { log } from 'console';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private messagesRepository: Repository<User>,
        private dataSource: DataSource
    ) { }

    getHistory(params: { box_id: number; limit: number; point: number }): Promise<User[]> {
        log(params);
        return this.messagesRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.messagesRepository.delete(id);
    }

    async createUser(body: User) {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await queryRunner.manager.insert<User>(User, body);
            await queryRunner.commitTransaction();
            log('here')
        } catch (err) {
            log('err', err)
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            log('release')
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
    }
}
