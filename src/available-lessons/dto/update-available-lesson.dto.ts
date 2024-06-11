import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailableLessonDto } from './create-available-lesson.dto';

export class UpdateAvailableLessonDto extends PartialType(CreateAvailableLessonDto) {}
