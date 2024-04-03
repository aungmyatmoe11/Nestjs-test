import { ApiProperty } from "@nestjs/swagger";

export class User { // ? database table like schema 
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}