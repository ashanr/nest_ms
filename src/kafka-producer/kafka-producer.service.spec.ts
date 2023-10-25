import { Injectable, OnModuleInit } from '@nestjs/common';
import { kafka } from '../kafka.config';  // Importing Kafka from your existing kafka.config.js


@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private consumer = kafka.consumer({ groupId: 'nestjs-kafka-group' });

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        });
      },
    });
  }
}
