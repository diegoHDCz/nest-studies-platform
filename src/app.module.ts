import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvailableLessonsModule } from './available-lessons/available-lessons.module';
import { ClassRegistrationModule } from './class-registration/class-registration.module';

@Module({
  imports: [AvailableLessonsModule, ClassRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
