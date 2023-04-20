import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'chat_nestjs',
      entities: [Users],
      autoLoadEntities: true, // every entity registered through the forFeature() method will be automatically added to the entities array of the configuration object
      synchronize: true, // shouldn't be used in production - otherwise you can lose production data
    }),
    UsersModule,
    AdminsModule
  ],
})
export class AppModule { }
