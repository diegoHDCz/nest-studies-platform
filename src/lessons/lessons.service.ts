import { Injectable } from '@nestjs/common';
import { Lesson, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma/prisma.service';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LessonCreateInput) {
    await this.prisma.lesson.create({
      data,
    });
  }

  async findAll(): Promise<Lesson[]> {
    return await this.prisma.lesson.findMany();
  }

  async findOne(id: number): Promise<Lesson | null> {
    return await this.prisma.lesson.findFirst({
      where: { id: Number(id) },
    });
  }

  async findAllByTechType(techType: string): Promise<Lesson[] | null> {
    return await this.prisma.lesson.findMany({
      where: { techType },
    });
  }
}
