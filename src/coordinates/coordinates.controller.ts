
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Controller, Post, Get, Body, BadRequestException } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './coordinates.dto';
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

  // @Post()
  // async sendCoordinates(@Body() coordinates: any) {
  //   this.client.emit<number>('coordinates_topic', coordinates);
  // }


  @ApiOperation({ summary: 'Create a new coordinate' })
  // @ApiBody({ type: CreateCoordinateDto })
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
}
