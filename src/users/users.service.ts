import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Users } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }

    async getUsers() {
        const usersList = await this.usersRepository.find();
        return usersList
    }

    async createUser(body: Users) {
        const hashedPass = await bcrypt.hash(body.password, 1);
        await this.usersRepository.insert({ ...body, password: hashedPass });
    }
}
