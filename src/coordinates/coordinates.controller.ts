import { Controller, Post, Body } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller('coordinates')
export class CoordinatesController {
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
}
