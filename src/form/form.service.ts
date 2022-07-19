import { Injectable } from '@nestjs/common';
import { Form } from './interfaces/form.interface'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class FormService {

    async findAll(): Promise<Form[]> {
        const forms = await prisma.form.findMany()
        return forms
    }

    async findOne(id: string): Promise<Form> {
        const form = await prisma.form.findUnique({
            where: {
              id: id,
            },
          })
        return form
    }

    async createOne(form: Form): Promise<Form> {
        const newForm = await prisma.form.create({
            data: form
          })
        return newForm
    }

    async updateOne(id: string, form: Form): Promise<Form> {
        const updatedForm = await prisma.form.update({
            where: {
              id: id,
            },
            data: form,
          })
        return updatedForm
    }

    async delete(id: string): Promise<Form> {
        const deleteForm = await prisma.form.delete({
            where: {
              id: id,
            },
          })
        return deleteForm
    }

}
