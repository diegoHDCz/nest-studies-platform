import { Test, TestingModule } from '@nestjs/testing';
import { AvailableLessonsController } from './available-lessons.controller';
import { AvailableLessonsService } from './available-lessons.service';

describe('AvailableLessonsController', () => {
  let controller: AvailableLessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailableLessonsController],
      providers: [AvailableLessonsService],
    }).compile();

    controller = module.get<AvailableLessonsController>(AvailableLessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
