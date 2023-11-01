import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coordinates, CoordinatesSchema } from '../coordinates/schema/coordinates.schema';
import { CoordinatesModule } from '../coordinates/coordinates.module';  // Import CoordinatesModule

import { MongoDBService } from './mongodb.service';

@Module({
  imports: [
    CoordinatesModule,
    MongooseModule.forFeature([{ name: Coordinates.name, schema: CoordinatesSchema }])
  ],
  providers: [MongoDBService],
})
export class MongoDBModule {}
