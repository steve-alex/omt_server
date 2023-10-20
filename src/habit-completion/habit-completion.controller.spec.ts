import { Test, TestingModule } from '@nestjs/testing';
import { HabitCompletionController } from './habit-completion.controller';

describe('HabitCompletionController', () => {
  let controller: HabitCompletionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitCompletionController],
    }).compile();

    controller = module.get<HabitCompletionController>(HabitCompletionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
