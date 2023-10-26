# NestJS Geolocation Service

## Description

This is a NestJS service for receiving and processing geological coordinates. It uses Kafka for message queuing and a NoSQL database for storage.

## Installation

    # Install dependencies
    npm install

## Running the app

    # Development mode
    npm run start

    # Watch mode
    npm run start:dev

    # Production mode
    npm run start:prod

## API Endpoints

### POST /coordinates

- **Description**: Send geological coordinates to be processed and stored.
- **Request Body**:

    {
      "latitude": "40.7128",
      "longitude": "74.0060"
    }

- **Response**: 200 OK

## Kafka Topics

- **coordinates_topic**: Topic for queuing geological coordinates.
