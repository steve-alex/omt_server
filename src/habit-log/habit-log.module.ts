import { Module } from '@nestjs/common';
import { HabitLogController } from './habit-log.controller';
import { HabitLogService } from './habit-log.service';

@Module({
  controllers: [HabitLogController],
  providers: [HabitLogService]
})
export class HabitLogModule {}
