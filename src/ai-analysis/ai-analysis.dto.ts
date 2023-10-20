export class AIAnalysisDTO {
    readonly id: number;
    readonly habitId: number;
    readonly analysisResults: string;
    readonly analysisTimestamp: Date;
    // Add other analysis-related properties as needed
}

export class CreateAIAnalysisDTO {
    readonly id: number;
    readonly habitId: number;
    readonly analysisResults: string;
    readonly analysisTimestamp: Date;
    // Add other analysis-related properties as needed
}

export class UpdateAIAnalysisDTO {
    readonly id: number;
    readonly habitId: number;
    readonly analysisResults: string;
    readonly analysisTimestamp: Date;
    // Add other analysis-related properties as needed
}