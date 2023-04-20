import { Controller, Param, Post, Body, Delete } from '@nestjs/common';
import { log } from 'console';
import { UsersService } from './users.service';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  createUser(
    @Body() body: Users,
  ) {
    return this.usersService.createUser(body);
  }
}
