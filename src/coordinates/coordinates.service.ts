// coordinates.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCoordinateDto } from './coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinate } from '../mongodb/coordinate.schema';

@Injectable()
export class CoordinatesService {
  constructor(@InjectModel(Coordinate.name) private coordinateModel: Model<Coordinate>) {}

  async create(createCoordinateDto: CreateCoordinateDto): Promise<Coordinate> {
    const createdCoordinate = new this.coordinateModel(createCoordinateDto);
    return createdCoordinate.save();
  }
}
