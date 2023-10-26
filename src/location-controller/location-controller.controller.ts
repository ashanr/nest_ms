

import { Controller, Get, Post, Put, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('location-controller')
export class LocationControllerController {
    @Get()
    findAll(): string {
        return 'This is your API endpoint!';
    }

    @Post()
    create(@Body() body: any): string {
        const { latitude, longitude } = body;
        if (!latitude || !longitude) {
            throw new HttpException('Invalid geolocation', HttpStatus.BAD_REQUEST);
        }
        // Your code to create a new resource with the given geolocation goes here
        return `Created resource with geolocation (${latitude}, ${longitude})`;
    }

    @Put(':id')
    update(@Body() body: any, @Param('id') id: string): string {
        const { latitude, longitude } = body;
        if (!latitude || !longitude) {
            throw new HttpException('Invalid geolocation', HttpStatus.BAD_REQUEST);
        }
        // Your code to update the resource with the given id and geolocation goes here
        return `Updated resource with id ${id} to geolocation (${latitude}, ${longitude})`;
    }
}
