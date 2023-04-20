import { Controller, Param, Post, Body, Delete, Get } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from './users.service';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

  @Post()
  createUser(
    @Body() body: Users,
  ) {
    return this.usersService.createUser(body);
  }
}
