import { ApiProperty } from '@nestjs/swagger';

export class CreateRouteDto {
  @ApiProperty({ example: 'R001', description: 'Route ID' })
  routeId: string;

  @ApiProperty({ example: 'Main Street', description: 'Route name' })
  name: string;

  @ApiProperty({ example: 'New York', description: 'City' })
  city: string;

  @ApiProperty({ example: 'USA', description: 'Country' })
  country: string;
}
