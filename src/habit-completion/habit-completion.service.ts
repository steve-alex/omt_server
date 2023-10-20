import { Injectable, NotFoundException } from '@nestjs/common';
import { HabitCompletion } from './habit-completion.entity';
import { CreateHabitCompletionDTO, UpdateHabitCompletionDTO } from './habit-completion.dto';

@Injectable()
export class HabitCompletionService {
  private habitCompletions: HabitCompletion[] = []; // Replace with your database or storage solution

  getHabitCompletion(id: number): HabitCompletion {
    const completion = this.habitCompletions.find((hc) => hc.id === id);
    if (!completion) {
      throw new NotFoundException('HabitCompletion not found');
    }
    return completion;
  }

  getAllHabitCompletions(): HabitCompletion[] {
    return this.habitCompletions;
  }

  createHabitCompletion(createHabitCompletionDTO: CreateHabitCompletionDTO): HabitCompletion {
    // Implement logic to create a new habit completion
    const newCompletion = new HabitCompletion(); // Create a new HabitCompletion entity
    // Populate newCompletion with data from createHabitCompletionDTO
    this.habitCompletions.push(newCompletion); // Add to the collection or database
    return newCompletion;
  }

  updateHabitCompletion(id: number, updateHabitCompletionDTO: UpdateHabitCompletionDTO): HabitCompletion {
    const completion = this.getHabitCompletion(id); // Retrieve the existing habit completion
    // Implement logic to update the habit completion using data from updateHabitCompletionDTO
    return completion;
  }

  deleteHabitCompletion(id: number) {
    const index = this.habitCompletions.findIndex((hc) => hc.id === id);
    if (index === -1) {
      throw new NotFoundException('HabitCompletion not found');
    }
    this.habitCompletions.splice(index, 1); // Remove the habit completion from the collection or database
  }
}