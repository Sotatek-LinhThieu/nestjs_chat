import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admins } from './admin.entity';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';

@Module({
    imports: [TypeOrmModule.forFeature([Admins])],
    controllers: [AdminsController],
    providers: [AdminsService],
    exports: [AdminsModule]
})
export class AdminsModule { }
