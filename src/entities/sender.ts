import { IsString } from 'class-validator';
export class Sender {
    @IsString() readonly name: string;
    @IsString() readonly email: string;
    @IsString() readonly text: string;

}