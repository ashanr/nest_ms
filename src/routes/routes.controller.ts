import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiBody, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @ApiOperation({ summary: 'Create a new route' })
  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @ApiOperation({ summary: 'Get existing routes' })
  @Get()
  findAll() {
    return this.routesService.findAll();
  }
}
