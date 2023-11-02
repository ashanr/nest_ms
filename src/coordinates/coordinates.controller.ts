
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Controller, Post, Put, Get, Body, BadRequestException, Param } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { UpdateCoordinatesDto } from './dto/update-coordinates.dto';
import { ApiBody, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Coordinates } from './schema/coordinates.schema';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @ApiOperation({ summary: 'Create a new coordinate' })
  @ApiParam({ name: 'lattitude', type: String, description: 'The lattitude of the coordinate' })
  @ApiParam({ name: 'longitude', type: String, description: 'The longitude of the coordinate' })
  @Post()
  async create(@Body() createCoordinateDto: CreateCoordinatesDto) {
    try {
      const result = await this.coordinatesService.create(createCoordinateDto);
      return result;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('An error occurred while saving to MongoDB.');
    }
  }

  @ApiOperation({ summary: 'Update coordinates by route ID' })
  @ApiParam({ name: 'routeId', description: 'ID of the route to update' })
  @ApiBody({ type: UpdateCoordinatesDto })
  @Put(':routeId')
  async update(@Param('routeId') routeId: string, @Body() updateCoordinatesDto: UpdateCoordinatesDto): Promise<Coordinates> {
    return this.coordinatesService.update(routeId, updateCoordinatesDto);
  }
}
