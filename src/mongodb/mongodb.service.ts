import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinates, CoordinateDocument } from '../coordinates/schema/coordinates.schema';

@Injectable()
export class MongoDBService {
  private readonly logger = new Logger(MongoDBService.name);

  constructor(
    @InjectModel(Coordinates.name) private coordinateModel: Model<CoordinateDocument>,
  ) {}

  async saveCoordinates(coordinates: any): Promise<Coordinates> {
    try {
      const createdCoordinate = new this.coordinateModel(coordinates);
      const result = await createdCoordinate.save();
      this.logger.log(`Coordinates saved: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error(`Error saving coordinates: ${error.message}`);
      throw new Error('Failed to save coordinates');
    }
  }
}
