import { Test, TestingModule } from '@nestjs/testing';
import { ChatBoxesController } from './chat-boxes.controller';

describe('ChatBoxesController', () => {
  let controller: ChatBoxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatBoxesController],
    }).compile();

    controller = module.get<ChatBoxesController>(ChatBoxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
