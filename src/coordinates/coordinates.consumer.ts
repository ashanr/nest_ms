
import { Controller, OnModuleInit } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload, KafkaContext, Ctx } from '@nestjs/microservices';
import { MongoDBService } from '../mongodb/mongodb.service';
import { Coordinates } from './schema/coordinates.schema'; 

export class CoordinatesConsumer implements OnModuleInit {
    constructor(private readonly mongoDBService: MongoDBService<Coordinates>) {}

    onModuleInit() {
        console.log("coordinates consumer started");
        // throw new Error('Method not implemented.');
    }

    @EventPattern('coordinates_topic')
    async handleCoordinates(@Payload() coordinates: any, @Ctx() context: KafkaContext) {
        await this.mongoDBService.saveDocument(coordinates);
    }
}
