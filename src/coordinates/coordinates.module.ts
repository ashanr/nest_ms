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
      provide: 'CoordinatesMongoDBService',  // Provide a specific name
      useFactory: (coordinatesModel: Model<Coordinates>) => {
        return new MongoDBService<Coordinates>(coordinatesModel);  // Pass the specific model
      },
      inject: [getModelToken(Coordinates.name)],  // Inject the specific model
    },
  ],
  // ... other configurations
})
export class CoordinatesModule {}
