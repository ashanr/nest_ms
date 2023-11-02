import { ApiProperty } from '@nestjs/swagger';

export class CreateCoordinatesDto {
  @ApiProperty({ example: 'R001', description: 'Route ID' })
  routeId: string;

  @ApiProperty({ example: '40.7128', description: 'Latititude' })
  latitude: string;

  @ApiProperty({ example: '74.0060', description: 'Longitude' })
  longitude: string;

  @ApiProperty({ example: 'Times Square', description: 'Location name' })
  name: string;
}
