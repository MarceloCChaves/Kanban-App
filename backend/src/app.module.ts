import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './database/prisma.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [TasksModule, PrismaModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
