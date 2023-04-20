import { Controller, Param, Post, Body, Delete } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  createUser(
    @Body() body: User,
  ) {
    return this.usersService.createUser(body);
  }
}
