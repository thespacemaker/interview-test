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

@Controller('form')
export class FormController {
    @Get()
    findAll(): string {
        return 'Get all';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;
    }

    @Post()
    create(@Body() createFormDto: CreateFormDto): string {
        return `
            firstName: ${createFormDto.firstName}
            lastName: ${createFormDto.lastName}
            address: ${createFormDto.address}
            city: ${createFormDto.city}
            state: ${createFormDto.state}
            zipCode: ${createFormDto.zipCode}
            email: ${createFormDto.email}
            `;
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
