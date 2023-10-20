import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HabitModule } from './habit/habit.module';
import { HabitCompletionModule } from './habit-completion/habit-completion.module';
import { HabitLogModule } from './habit-log/habit-log.module';
import { CategoryModule } from './category/category.module';
import { AiAnalysisModule } from './ai-analysis/ai-analysis.module';

@Module({
  imports: [UserModule, HabitModule, HabitCompletionModule, HabitLogModule, CategoryModule, AiAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
