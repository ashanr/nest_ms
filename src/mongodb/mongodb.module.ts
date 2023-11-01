import { Module } from '@nestjs/common';
import { MongooseModule ,getModelToken } from '@nestjs/mongoose';
import { Coordinates, CoordinatesSchema } from '../coordinates/schema/coordinates.schema';
import { CoordinatesModule } from '../coordinates/coordinates.module';  // Import CoordinatesModule

import { MongoDBService } from './mongodb.service';

@Module({
  imports: [
    CoordinatesModule,
    MongooseModule.forFeature([{ name: Coordinates.name, schema: CoordinatesSchema }])
  ],
  providers: [MongoDBService , {
    provide: getModelToken(Coordinates.name),
    useValue: Coordinates,
    },
  ],
})
export class MongoDBModule {}
