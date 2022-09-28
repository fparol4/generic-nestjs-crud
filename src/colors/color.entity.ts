import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    color: string
}
