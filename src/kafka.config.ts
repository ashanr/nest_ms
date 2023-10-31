import { Kafka, KafkaConfig } from 'kafkajs';

export const kafkaConfig: KafkaConfig = {
  clientId: 'nestjs-kafka-app',
  brokers: ['localhost:9092'], // Replace with the address of your Kafka broker
};

export const kafka = new Kafka(kafkaConfig);
