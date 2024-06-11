import { Injectable } from '@nestjs/common';
import { CreateClassRegistrationDto } from './dto/create-class-registration.dto';
import { UpdateClassRegistrationDto } from './dto/update-class-registration.dto';

@Injectable()
export class ClassRegistrationService {
  create(createClassRegistrationDto: CreateClassRegistrationDto) {
    return 'This action adds a new classRegistration';
  }

  findAll() {
    return `This action returns all classRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classRegistration`;
  }

  update(id: number, updateClassRegistrationDto: UpdateClassRegistrationDto) {
    return `This action updates a #${id} classRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} classRegistration`;
  }
}
