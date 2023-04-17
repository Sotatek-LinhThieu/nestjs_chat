import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ChatBoxesController } from './chat-boxes/chat-boxes.controller';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [],
  controllers: [ChatBoxesController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
