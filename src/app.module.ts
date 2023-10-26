import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka-producer/kafka-producer.service';
import { KafkaConsumerService } from './kafka-consumer/kafka-consumer.service';  // Import the new service
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { LocationControllerController } from './location-controller/location-controller.controller';
import { CoordinatesController } from './coordinates/coordinates.controller';
import { CoordinatesConsumer } from './coordinates/coordinates.consumer';

@Module({
  imports: [KafkaConsumerModule],
  controllers: [AppController, LocationControllerController, CoordinatesController],
  providers: [AppService, KafkaProducerService, KafkaConsumerService,CoordinatesConsumer],  // Add the new service here
})
export class AppModule {}

