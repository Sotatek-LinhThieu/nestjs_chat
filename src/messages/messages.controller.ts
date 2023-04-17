import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { log } from 'console';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessagesHistory(
    @Param() params: { box_id: string; limit: number; point: number },
  ): string {
    log(params);
    return `This action returns messages of box chat ${params.box_id}`;
  }

  @Post()
  sendMessage(
    @Param() params: { box_id: string; user_id: string; msg: string },
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
