
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './coordinates.dto';


@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

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

  @Post()
  async sendCoordinates(@Body() coordinates: any) {
    this.client.emit<number>('coordinates_topic', coordinates);
  }


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
