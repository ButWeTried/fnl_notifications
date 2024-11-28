import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({ type: Boolean, default: false })
  @IsNotEmpty()
  @IsBoolean()
  isRead: boolean;
}
