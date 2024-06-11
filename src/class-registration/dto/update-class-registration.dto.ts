import { PartialType } from '@nestjs/mapped-types';
import { CreateClassRegistrationDto } from './create-class-registration.dto';

export class UpdateClassRegistrationDto extends PartialType(CreateClassRegistrationDto) {}
