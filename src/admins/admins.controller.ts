import { Controller, Param, Post, Body, Delete } from '@nestjs/common';
import { log } from 'console';
import { AdminsService } from './admins.service';
import { Admins } from './admin.entity';

@Controller('admins')
export class AdminsController {
  constructor(private adminsService: AdminsService) { }

  @Post()
  createAdmin(
    @Body() body: Admins,
  ) {
    return this.adminsService.createAdmin(body);
  }
}
