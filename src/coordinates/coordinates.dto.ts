import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoordinateDto {

  @ApiProperty({
    example: '40.7128',
    description: 'The latitude',
  })
  @IsNumber()
  latitude: string;

  @ApiProperty({
    example: '74.0060',
    description: 'The longitude',
  })
  @IsNumber()
  longitude: string;
}
