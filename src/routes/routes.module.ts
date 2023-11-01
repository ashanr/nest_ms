import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Route, RouteSchema } from './schemas/route.schema';
import { MongoDBService } from 'src/mongodb/mongodb.service';
import { Model } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }])],
  controllers: [RoutesController],
  providers: [RoutesService , 
    {
      provide: 'InitRouteService',
      useFactory: (mongoDBService: MongoDBService<any>, routesModel: Model<Route>) => {
        mongoDBService.setModel(routesModel);
      },
      inject: [MongoDBService, getModelToken(Route.name)],
    },
  ],
})
export class RoutesModule {}
