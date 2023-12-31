import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka-producer/kafka-producer.service';
import { KafkaConsumerService } from './kafka-consumer/kafka-consumer.service';  // Import the new service
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { CoordinatesController } from './coordinates/coordinates.controller';
import { CoordinatesConsumer } from './coordinates/coordinates.consumer';
import { MongoDBService } from './mongodb/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoordinatesService } from './coordinates/coordinates.service';
import * as dotenv from 'dotenv';
import { getModelToken } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { MongoDBModule } from './mongodb/mongodb.module';  

dotenv.config({ path: './.env' });

@Module({
  imports: [
    MongoDBModule,
    KafkaConsumerModule, 
    RoutesModule,
    CoordinatesModule,
    MongooseModule.forFeature(),
    MongooseModule.forRoot(process.env['MONGODB_URI'], {
      serverSelectionTimeoutMS: 5000,
    })
  ],
  controllers: [AppController],
  providers: [AppService, KafkaProducerService, KafkaConsumerService, CoordinatesConsumer],
})
export class AppModule {}

