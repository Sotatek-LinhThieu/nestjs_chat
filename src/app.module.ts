import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages/message.entity';
import { MessagesModule } from './messages/messages.module';
import { User } from './users/user.entity';
import { ChatBox } from './chat-boxes/chatBox.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, ChatBox, Message],
      autoLoadEntities: true, // every entity registered through the forFeature() method will be automatically added to the entities array of the configuration object
      synchronize: true, // shouldn't be used in production - otherwise you can lose production data
    }),
    MessagesModule,
    UsersModule
  ],
})
export class AppModule { }
