import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailableLessonsService } from './available-lessons.service';
import { CreateAvailableLessonDto } from './dto/create-available-lesson.dto';
import { UpdateAvailableLessonDto } from './dto/update-available-lesson.dto';

@Controller('available-lessons')
export class AvailableLessonsController {
  constructor(private readonly availableLessonsService: AvailableLessonsService) {}

  @Post()
  create(@Body() createAvailableLessonDto: CreateAvailableLessonDto) {
    return this.availableLessonsService.create(createAvailableLessonDto);
  }

  @Get()
  findAll() {
    return this.availableLessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availableLessonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailableLessonDto: UpdateAvailableLessonDto) {
    return this.availableLessonsService.update(+id, updateAvailableLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availableLessonsService.remove(+id);
  }
}
