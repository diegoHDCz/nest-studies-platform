import { Injectable } from '@nestjs/common';
import { CreateAvailableLessonDto } from './dto/create-available-lesson.dto';
import { UpdateAvailableLessonDto } from './dto/update-available-lesson.dto';

@Injectable()
export class AvailableLessonsService {
  create(createAvailableLessonDto: CreateAvailableLessonDto) {
    return 'This action adds a new availableLesson';
  }

  findAll() {
    return `This action returns all availableLessons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} availableLesson`;
  }

  update(id: number, updateAvailableLessonDto: UpdateAvailableLessonDto) {
    return `This action updates a #${id} availableLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} availableLesson`;
  }
}
