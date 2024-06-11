import { Test, TestingModule } from '@nestjs/testing';
import { AvailableLessonsService } from './available-lessons.service';

describe('AvailableLessonsService', () => {
  let service: AvailableLessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailableLessonsService],
    }).compile();

    service = module.get<AvailableLessonsService>(AvailableLessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
