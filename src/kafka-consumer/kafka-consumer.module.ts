import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  providers: [KafkaConsumerService],
  exports: [KafkaConsumerService],  // Export the service if you want to use it in other modules
})
export class KafkaConsumerModule {}
