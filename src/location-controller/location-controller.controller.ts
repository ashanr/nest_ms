

import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

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
}
