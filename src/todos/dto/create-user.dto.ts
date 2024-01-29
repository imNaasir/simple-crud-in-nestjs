import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator";


export class CreateUserDto {

    @IsString()
    title: string;


}