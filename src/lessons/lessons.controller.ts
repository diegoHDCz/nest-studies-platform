import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(+id);
  }

  @Get(':techType')
  update(@Param('techType') techType: string) {
    return this.lessonsService.findAllByTechType(techType);
  }
}
