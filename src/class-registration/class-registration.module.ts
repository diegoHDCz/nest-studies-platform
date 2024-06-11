import { Module } from '@nestjs/common';
import { ClassRegistrationService } from './class-registration.service';
import { ClassRegistrationController } from './class-registration.controller';

@Module({
  controllers: [ClassRegistrationController],
  providers: [ClassRegistrationService],
})
export class ClassRegistrationModule {}
