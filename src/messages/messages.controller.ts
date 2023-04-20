import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { log } from 'console';
import { MessagesService } from './messages.service';
import { MsgHistoryParams } from './interfaces/message.interface';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) { }

  @Get()
  getMessagesHistory(
    @Param() params: MsgHistoryParams,
  ) {
    // return 'This action send a new msg';
    return this.messagesService.getHistory(params);
  }

  @Post()
  sendMessage(
    @Param() params: { box_id: number; user_id: string; msg: string },
  ): string {
    log(params);
    return 'This action send a new msg';
  }

  @Delete(':msg_id')
  deleteMessage(@Param('msg_id') msg_id: string): string {
    log(msg_id);
    return 'This action deletes a msg';
  }
}
