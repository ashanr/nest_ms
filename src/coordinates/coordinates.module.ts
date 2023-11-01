import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Coordinates, CoordinatesSchema } from './schema/coordinates.schema';
import { CoordinatesService } from './coordinates.service';
import { MongoDBService } from '../mongodb/mongodb.service';  // Import MongoDBService
import { CoordinatesController } from './coordinates.controller';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coordinates.name, schema: CoordinatesSchema }]),
  ],
  controllers: [CoordinatesController],
  providers: [
    CoordinatesService,
    {
      provide: 'InitCoordinatesService',
      useFactory: (mongoDBService: MongoDBService<any>, coordinatesModel: Model<Coordinates>) => {
        mongoDBService.setModel(coordinatesModel);
      },
      inject: [MongoDBService, getModelToken(Coordinates.name)],
    },
  ],
  // ... other configurations
})
export class CoordinatesModule {}
