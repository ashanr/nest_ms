import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { Route } from './schemas/route.schema';
import { MongoDBService } from '../mongodb/mongodb.service';

@Injectable()
export class RoutesService {
  constructor(@InjectModel(Route.name) private routeModel: Model<Route>) {}

  async create(createRouteDto: CreateRouteDto): Promise<Route> {
    const createdRoute = new this.routeModel(createRouteDto);
    return createdRoute.save();
  }

  async findAll(): Promise<Route[]> {
    return this.routeModel.find().exec();
  }
}
