import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HabitCompletionService } from './habit-completion.service';
import { HabitCompletionDTO } from './habit-completion.dto';

@Controller('habit-completions')
export class HabitCompletionController {
  constructor(private habitCompletionService: HabitCompletionService) {}

  @Get(':id')
  getHabitCompletion(@Param('id') id: number) {
    return this.habitCompletionService.getHabitCompletion(id);
  }

  @Post()
  createHabitCompletion(@Body() createHabitCompletionDTO: HabitCompletionDTO) {
    return this.habitCompletionService.createHabitCompletion(createHabitCompletionDTO);
  }

  @Put(':id')
  updateHabitCompletion(@Param('id') id: number, @Body() updateHabitCompletionDTO: HabitCompletionDTO) {
    return this.habitCompletionService.updateHabitCompletion(id, updateHabitCompletionDTO);
  }

  @Delete(':id')
  deleteHabitCompletion(@Param('id') id: number) {
    return this.habitCompletionService.deleteHabitCompletion(id);
  }
}