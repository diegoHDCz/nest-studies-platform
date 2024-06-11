import { Test, TestingModule } from '@nestjs/testing';
import { ClassRegistrationController } from './class-registration.controller';
import { ClassRegistrationService } from './class-registration.service';

describe('ClassRegistrationController', () => {
  let controller: ClassRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassRegistrationController],
      providers: [ClassRegistrationService],
    }).compile();

    controller = module.get<ClassRegistrationController>(ClassRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
