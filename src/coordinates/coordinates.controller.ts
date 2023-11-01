
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Controller, Post, Put, Get, Body, BadRequestException, Param } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './coordinates.dto';
import { UpdateCoordinatesDto } from './dto/update-coordinates.dto';
import { ApiBody, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';


@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @ApiOperation({ summary: 'Get all coordinates' })
  @Get()
    findAll(): string {
        return 'This is your API endpoint!';
  }

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'coordinates-consumer', // Should match Kafka consumer groupId
      },
    },
  })
  private client: ClientKafka;


  @ApiOperation({ summary: 'Create a new coordinate' })
  @ApiParam({ name: 'lattitude', type: String, description: 'The lattitude of the coordinate' })
  @ApiParam({ name: 'longitude', type: String, description: 'The longitude of the coordinate' })
  @Post()
  async create(@Body() createCoordinateDto: CreateCoordinateDto) {
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
