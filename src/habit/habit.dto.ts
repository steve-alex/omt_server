export class HabitDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly frequency: string;
    readonly goal: string;
    readonly categoryId: number;
    // Add other habit-related properties as needed
}

export class CreateHabitDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly frequency: string;
    readonly goal: string;
    readonly categoryId: number;
    // Add other habit-related properties as needed
}

export class UpdateHabitDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly frequency: string;
    readonly goal: string;
    readonly categoryId: number;
    // Add other habit-related properties as needed
  }