import {
    Get,
    Post,
    Body,
    Param
} from '@nestjs/common';

import { Validator, Length } from 'class-validator'

export class Color {
    @Length(4)
    color: string
}

import { Repository } from 'typeorm'

export interface HttpResponse {
    status: number
    content: any
}

export interface CrudEntity {
    id: number
}

export abstract class CrudService<T extends CrudEntity> {
    constructor(public entityRepository: Repository<T>) { }

    async list() {
        const entities = await this.entityRepository.find()
        return entities
    }

    async findById(id: any) {
        const entity = await this
            .entityRepository
            .findOne({ where: { id } })
        return entity
    }

    async save(payload: any) {
        const entity = await this.entityRepository.save(payload)
        return entity
    }
}

export abstract class CrudController<T extends CrudEntity> {
    constructor(private entityService: CrudService<T>) { }

    @Get('/')
    async list(): Promise<Promise<HttpResponse>> {
        const entities = await this.entityService.list()
        return {
            status: 200,
            content: entities
        }
    }

    @Get('/:id')
    async find(
        @Param('id') id: string
    ): Promise<HttpResponse> {
        const entity = await this.entityService.findById(id)
        return {
            status: 200,
            content: entity
        }
    }


    @Post('/')
    async create(
        @Body() payload: Omit<T, 'id'>
    ): Promise<HttpResponse> {
        const entity = await this.entityService.save(payload)
        return {
            status: 200,
            content: entity
        }
    }
}

