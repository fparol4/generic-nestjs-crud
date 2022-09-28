import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './color.entity';
import { ColorController } from './colors.controller'
import { ColorService } from './colors.service'

@Module({
    imports: [TypeOrmModule.forFeature([Color])],
    controllers: [ColorController],
    providers: [ColorService],

})
export class ColorsModule { }
