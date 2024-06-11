import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassRegistrationService } from './class-registration.service';
import { CreateClassRegistrationDto } from './dto/create-class-registration.dto';
import { UpdateClassRegistrationDto } from './dto/update-class-registration.dto';

@Controller('class-registration')
export class ClassRegistrationController {
  constructor(private readonly classRegistrationService: ClassRegistrationService) {}

  @Post()
  create(@Body() createClassRegistrationDto: CreateClassRegistrationDto) {
    return this.classRegistrationService.create(createClassRegistrationDto);
  }

  @Get()
  findAll() {
    return this.classRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassRegistrationDto: UpdateClassRegistrationDto) {
    return this.classRegistrationService.update(+id, updateClassRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classRegistrationService.remove(+id);
  }
}
