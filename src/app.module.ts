import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka-producer/kafka-producer.service';
import { KafkaConsumerService } from './kafka-consumer/kafka-consumer.service';  // Import the new service
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { LocationControllerController } from './location-controller/location-controller.controller';

@Module({
  imports: [KafkaConsumerModule],
  controllers: [AppController, LocationControllerController],
  providers: [AppService, KafkaProducerService, KafkaConsumerService],  // Add the new service here
})
export class AppModule {}

