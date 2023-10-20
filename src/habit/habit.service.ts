import { Injectable, NotFoundException } from '@nestjs/common';
import { Habit } from './habit.entity';
import { CreateHabitDTO, UpdateHabitDTO } from './habit.dto';

@Injectable()
export class HabitService {
  private habits: Habit[] = []; // Replace with your database or storage solution

  getHabit(id: number): Habit {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException('Habit not found');
    }
    return habit;
  }

  getAllHabits(): Habit[] {
    return this.habits;
  }

  createHabit(createHabitDTO: CreateHabitDTO): Habit {
    // Implement logic to create a new habit
    const newHabit = new Habit(); // Create a new Habit entity
    // Populate newHabit with data from createHabitDTO
    this.habits.push(newHabit); // Add to the collection or database
    return newHabit;
  }

  updateHabit(id: number, updateHabitDTO: UpdateHabitDTO): Habit {
    const habit = this.getHabit(id); // Retrieve the existing habit
    // Implement logic to update the habit using data from updateHabitDTO
    return habit;
  }

  deleteHabit(id: number) {
    const index = this.habits.findIndex((h) => h.id === id);
    if (index === -1) {
      throw new NotFoundException('Habit not found');
    }
    this.habits.splice(index, 1); // Remove the habit from the collection or database
  }
}