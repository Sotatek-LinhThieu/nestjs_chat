import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { log } from 'console';

@Controller('chat-boxes')
export class ChatBoxesController {
  @Get()
  getListChatBoxes(
    @Param() params: { user_id: string; limit: number; point: number },
  ): string {
    log(params);
    return `This action returns chat boxes of user ${params.user_id}`;
  }

  @Post()
  createNewChatBox(
    @Param() params: { host_id: string; member_ids: string[] },
  ): string {
    log(params);
    return 'This action adds a new chat box';
  }

  @Delete(':box_id')
  deleteChatBox(@Param('box_id') box_id: string): string {
    log(box_id);
    return 'This action deletes a chat box';
  }
}
