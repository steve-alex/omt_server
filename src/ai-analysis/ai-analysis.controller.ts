import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AIAnalysisService } from './ai-analysis.service';
import { AIAnalysisDTO } from './ai-analysis.dto';

@Controller('ai-analysis')
export class AIAnalysisController {
  constructor(private aiAnalysisService: AIAnalysisService) {}

  @Get(':id')
  getAIAnalysis(@Param('id') id: number) {
    return this.aiAnalysisService.getAIAnalysis(id);
  }

  @Post()
  createAIAnalysis(@Body() createAIAnalysisDTO: AIAnalysisDTO) {
    return this.aiAnalysisService.createAIAnalysis(createAIAnalysisDTO);
  }

  @Put(':id')
  updateAIAnalysis(@Param('id') id: number, @Body() updateAIAnalysisDTO: AIAnalysisDTO) {
    return this.aiAnalysisService.updateAIAnalysis(id, updateAIAnalysisDTO);
  }

  @Delete(':id')
  deleteAIAnalysis(@Param('id') id: number) {
    return this.aiAnalysisService.deleteAIAnalysis(id);
  }
}