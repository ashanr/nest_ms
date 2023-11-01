import { ApiProperty } from '@nestjs/swagger';

export class UpdateCoordinatesDto {
  @ApiProperty({ example: 'R001', description: 'Route ID' })
  routeId: string;

  @ApiProperty({ example: [40.7128, 74.0060], description: 'Coordinates [lng, lat]' })
  coordinates: number[];

  @ApiProperty({ example: 'Times Square', description: 'Location name' })
  name: string;
}
