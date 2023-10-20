import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitDTO } from './habit.dto';

@Controller('habits')
export class HabitController {
  constructor(private habitService: HabitService) {}

  @Get(':id')
  getHabit(@Param('id') id: number) {
    return this.habitService.getHabit(id);
  }

  @Post()
  createHabit(@Body() createHabitDTO: HabitDTO) {
    return this.habitService.createHabit(createHabitDTO);
  }

  @Put(':id')
  updateHabit(@Param('id') id: number, @Body() updateHabitDTO: HabitDTO) {
    return this.habitService.updateHabit(id, updateHabitDTO);
  }

  @Delete(':id')
  deleteHabit(@Param('id') id: number) {
    return this.habitService.deleteHabit(id);
  }
}
