export class HabitCompletionDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly completionDate: Date;
    readonly notes: string;
    readonly progressLevel: number;
    // Add other completion-related properties as needed
}

export class CreateHabitCompletionDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly completionDate: Date;
    readonly notes: string;
    readonly progressLevel: number;
    // Add other completion-related properties as needed
}

export class UpdateHabitCompletionDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly completionDate: Date;
    readonly notes: string;
    readonly progressLevel: number;
    // Add other completion-related properties as needed
  }