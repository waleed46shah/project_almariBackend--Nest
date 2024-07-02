import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  EMAIL: string;

  @IsString()
  @IsNotEmpty()
  PASSWORD: string;
}
