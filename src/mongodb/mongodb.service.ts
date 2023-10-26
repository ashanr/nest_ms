import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinate, CoordinateDocument } from './coordinate.schema';

@Injectable()
export class MongoDBService {
  constructor(
    @InjectModel(Coordinate.name) private coordinateModel: Model<CoordinateDocument>,
  ) {}

  async saveCoordinates(coordinates: any): Promise<Coordinate> {
    const createdCoordinate = new this.coordinateModel(coordinates);
    return createdCoordinate.save();
  }
}
