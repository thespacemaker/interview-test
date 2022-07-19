import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Body, 
    Param 
} from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { FormService } from './form.service'
import { Form } from './interfaces/form.interface'
  

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {
    }
    @Get()
    findAll(): Form[] {
        return this.formService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Form {
        return this.formService.findOne(id);
    }

    @Post()
    create(@Body() createFormDto: CreateFormDto): Promise<Form> {
        return this.formService.createOne(createFormDto)
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `deleted ${id}`;
    }
 
    @Put(':id')
    update(@Body() updateFormDto: CreateFormDto, @Param('id') id): string {
        return `update ${id}`;
    }
}
