import { IsNumber } from 'class-validator';

export class CreateCoordinateDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
