
import { Controller, OnModuleInit } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload, KafkaContext, Ctx } from '@nestjs/microservices';
import { MongoDBService } from '../mongodb/mongodb.service';

export class CoordinatesConsumer implements OnModuleInit {
    constructor(private readonly mongoDBService: MongoDBService) {}

    onModuleInit() {
        throw new Error('Method not implemented.');
    }

    @EventPattern('coordinates_topic')
    async handleCoordinates(@Payload() coordinates: any, @Ctx() context: KafkaContext) {
        await this.mongoDBService.saveCoordinates(coordinates);
    }
}
