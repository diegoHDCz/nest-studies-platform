import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  instructor: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  techType: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  watched: boolean;
  @ApiProperty()
  instructorEmail: string;
}
