import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiResponse } from '@nestjs/swagger';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { GetLessonDto } from './dto/get-lesson.dto';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @ApiResponse({
    status: 201,
    description: 'The lesson has been successfully created.',
  })
  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'The lesson records',
    type: GetLessonDto,
    isArray: true,
  })
  findAll() {
    return this.lessonsService.findAll();
  }

  @Get(':id')
  @ApiParam({ type: 'number', name: 'id' })
  @ApiOkResponse({
    description: 'Single lesson',
    type: GetLessonDto,
    isArray: false,
  })
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(+id);
  }

  @Get(':techType')
  @ApiParam({ type: 'string', name: 'techType' })
  @ApiOkResponse({
    description: 'category lesson records',
    type: GetLessonDto,
    isArray: true,
  })
  update(@Param('techType') techType: string) {
    return this.lessonsService.findAllByTechType(techType);
  }
}
