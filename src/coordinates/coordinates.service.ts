// coordinates.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { UpdateCoordinatesDto } from './dto/update-coordinates.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinates } from './schema/coordinates.schema';
import { MongoDBService } from '../mongodb/mongodb.service';

@Injectable()
export class CoordinatesService {
  constructor(
    @InjectModel(Coordinates.name) private coordinatesModel: Model<Coordinates>,
    private readonly mongoDBService: MongoDBService<Coordinates>,
  ) {}

  async get(routeId?: string): Promise<Coordinates[]> {
    if (routeId) {
      return this.coordinatesModel.find({ routeId });
    }
    return this.coordinatesModel.find();
  }
  async create(
    createCoordinateDto: CreateCoordinatesDto,
  ): Promise<Coordinates> {
    const createdCoordinate = new this.coordinatesModel(createCoordinateDto);
    return createdCoordinate.save();
  }
  async update(
    routeId: string,
    updateCoordinatesDto: UpdateCoordinatesDto,
  ): Promise<Coordinates> {
    return this.coordinatesModel
      .findOneAndUpdate({ routeId }, updateCoordinatesDto, { new: true })
      .exec();
  }
}
