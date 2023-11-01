import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka-producer/kafka-producer.service';
import { KafkaConsumerService } from './kafka-consumer/kafka-consumer.service';  // Import the new service
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { LocationControllerController } from './location-controller/location-controller.controller';
import { CoordinatesController } from './coordinates/coordinates.controller';
import { CoordinatesConsumer } from './coordinates/coordinates.consumer';
import { MongoDBService } from './mongodb/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coordinate, CoordinateSchema } from './mongodb/coordinate.schema';
import { CoordinatesService } from './coordinates/coordinates.service';
import * as dotenv from 'dotenv';
import { getModelToken } from '@nestjs/mongoose';


dotenv.config({ path: './.env' });

@Module({
  imports: [
    KafkaConsumerModule, 
    MongooseModule.forFeature([{ name: Coordinate.name, schema: CoordinateSchema }]),
    MongooseModule.forRoot(process.env['MONGODB_URI'], {
      serverSelectionTimeoutMS: 5000,
    })
  ],
  controllers: [AppController, LocationControllerController, CoordinatesController],
  providers: [AppService, KafkaProducerService, KafkaConsumerService, CoordinatesConsumer, MongoDBService,   CoordinatesService,
    {
      provide: getModelToken('Coordinate'),
      useValue: {}, // Mock the Mongoose model here
    },],
})
export class AppModule {}

