import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HabitLogService } from './habit-log.service';
import { HabitLogDTO } from './habit-log.dto';

@Controller('habit-logs')
export class HabitLogController {
  constructor(private habitLogService: HabitLogService) {}

  @Get(':id')
  getHabitLog(@Param('id') id: number) {
    return this.habitLogService.getHabitLog(id);
  }

  @Post()
  createHabitLog(@Body() createHabitLogDTO: HabitLogDTO) {
    return this.habitLogService.createHabitLog(createHabitLogDTO);
  }

  @Put(':id')
  updateHabitLog(@Param('id') id: number, @Body() updateHabitLogDTO: HabitLogDTO) {
    return this.habitLogService.updateHabitLog(id, updateHabitLogDTO);
  }

  @Delete(':id')
  deleteHabitLog(@Param('id') id: number) {
    return this.habitLogService.deleteHabitLog(id);
  }
}