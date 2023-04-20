import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Admins } from './admin.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admins)
        private adminsRepository: Repository<Admins>,
    ) { }

    async createAdmin(body: Admins) {
        const hashedPass = await bcrypt.hash(body.password, 1);
        await this.adminsRepository.insert({ ...body, password: hashedPass });
    }
}
