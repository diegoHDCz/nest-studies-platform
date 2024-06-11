import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';
import { PrismaService } from './prisma/prisma/prisma.service';

@Module({
  imports: [LessonsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
