import { Body, Controller, Post } from "@nestjs/common";
import { CrudController, HttpResponse } from "src/lib/crud";
import { Color } from "./color.entity";
import { ColorService } from './colors.service'
import { CreateColorDTO } from "./dto/create-color.dto";

@Controller('colors')
export class ColorController extends CrudController<Color> {
    constructor(public colorsService: ColorService) {
        super(colorsService)
    }

    @Post('/')
    async create(
        @Body() payload: CreateColorDTO
    ): Promise<HttpResponse> {
        return super.create(payload)
    }
}