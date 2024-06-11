import { Module } from '@nestjs/common';
import { AvailableLessonsService } from './available-lessons.service';
import { AvailableLessonsController } from './available-lessons.controller';

@Module({
  controllers: [AvailableLessonsController],
  providers: [AvailableLessonsService],
})
export class AvailableLessonsModule {}
