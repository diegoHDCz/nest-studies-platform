import { ApiProperty } from '@nestjs/swagger';

export class GetLessonDto {
  @ApiProperty()
  id: number;
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
}
