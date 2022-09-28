import { InjectRepository } from "@nestjs/typeorm";
import { CrudService } from "src/lib/crud";
import { Repository } from "typeorm";
import { Color } from "./color.entity";

export class ColorService extends CrudService<Color> {
    constructor(
        @InjectRepository(Color)
        public colorsRepository: Repository<Color>
    ) {
        super(colorsRepository)
    }
}