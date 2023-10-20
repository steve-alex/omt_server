export class HabitLogDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly logDate: Date;
    readonly logContent: string;
    readonly emotion: string;
    // Add other log-related properties as needed
}

export class UpdateHabitLogDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly logDate: Date;
    readonly logContent: string;
    readonly emotion: string;
    // Add other log-related properties as needed
}

export class CreateHabitLogDTO {
    readonly id: number;
    readonly habitId: number;
    readonly userId: number;
    readonly logDate: Date;
    readonly logContent: string;
    readonly emotion: string;
    // Add other log-related properties as needed
  }