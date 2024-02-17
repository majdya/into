import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Admin', 'Experienced'], {
    message: 'Valid role required',
  })
  role: 'Intern' | 'Admin' | 'Experienced';
}
