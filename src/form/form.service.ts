import { Injectable } from '@nestjs/common';
import { Form } from './interfaces/form.interface'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class FormService {
    private readonly forms: Form[] = [
        {
            id: "1",
            firstName: "Adnan",
            lastName: "Chahbandar",
            address: "123 Nowhere Circle",
            city: "Dallas",
            state: "TX",
            zipCode: "75207",
            email: "me@adnan.io"
        },
        {
            id: "011",
            firstName: "Test Subject",
            lastName: "011",
            address: "Research Facility Dr",
            city: "Dallas",
            state: "TX",
            zipCode: "75207",
            email: "011@testcorp.com"
        }
    ]

    findAll(): Form[] {
        return this.forms
    }

    findOne(id: string): Form {
        return this.forms.find(form => form.id === id);
    }

    async createOne(form: Form): Promise<Form> {
        const newForm = await prisma.form.create({
            data: form
          })
        return newForm
    }

}
