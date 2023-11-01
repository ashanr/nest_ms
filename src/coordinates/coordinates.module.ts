import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coordinates, CoordinatesSchema } from './schema/coordinates.schema';
import { CoordinatesService } from './coordinates.service';
import { CoordinatesController } from './coordinates.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coordinates.name, schema: CoordinatesSchema }])
  ],
  providers: [CoordinatesService],
  controllers: [CoordinatesController],
})
export class CoordinatesModule {}
