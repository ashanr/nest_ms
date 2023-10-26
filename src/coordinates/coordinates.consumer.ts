import { Controller, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload, KafkaContext, Consumer } from '@nestjs/microservices';

@Controller()
export class CoordinatesConsumer implements OnModuleInit {
  @Consumer('coordinates_topic')
  async handleCoordinates(@Payload() coordinates: any, @KafkaContext() context: KafkaContext) {
    // Process coordinates and write to NoSQL database
  }
}
