import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthConfirmPhoneDto {
  @ApiProperty()
  @IsNotEmpty()
  hash: string;
}
