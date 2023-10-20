import { Injectable, NotFoundException } from '@nestjs/common';
import { HabitLog } from './habit-log.entity';
import { CreateHabitLogDTO, UpdateHabitLogDTO } from './habit-log.dto';

@Injectable()
export class HabitLogService {
  private habitLogs: HabitLog[] = []; // Replace with a database or storage solution

  getHabitLog(id: number): HabitLog {
    const habitLog = this.habitLogs.find((log) => log.id === id);
    if (!habitLog) {
      throw new NotFoundException('HabitLog not found');
    }
    return habitLog;
  }

  createHabitLog(createHabitLogDTO: CreateHabitLogDTO): HabitLog {
    // Implement logic to create a new habit log
    const newHabitLog = new HabitLog(); // Create a new HabitLog entity
    // Populate newHabitLog with data from createHabitLogDTO
    this.habitLogs.push(newHabitLog); // Add to the collection or database
    return newHabitLog;
  }

  updateHabitLog(id: number, updateHabitLogDTO: UpdateHabitLogDTO): HabitLog {
    const habitLog = this.getHabitLog(id); // Retrieve the existing habit log
    // Implement logic to update the habit log using data from updateHabitLogDTO
    return habitLog;
  }

  deleteHabitLog(id: number) {
    const index = this.habitLogs.findIndex((log) => log.id === id);
    if (index === -1) {
      throw new NotFoundException('HabitLog not found');
    }
    this.habitLogs.splice(index, 1); // Remove the habit log from the collection or database
  }
}