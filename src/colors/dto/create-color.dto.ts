import { IsString, IsInt } from 'class-validator';

export class CreateColorDTO {
    @IsString()
    color: string
}