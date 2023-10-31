import { Test, TestingModule } from '@nestjs/testing';
import { MongoDBService } from '../src/mongodb/mongodb.service';
import { getModelToken } from '@nestjs/mongoose';

describe('MongoDBService', () => {
  let service: MongoDBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MongoDBService,
        {
          provide: getModelToken('Coordinate'),
          useValue: {}, // Mock model functions here
        },
      ],
    }).compile();

    service = module.get<MongoDBService>(MongoDBService);
  });

  it('should save coordinates', async () => {
    const coordinates = { latitude: 40.7128, longitude: -74.0060 };
    const result = await service.saveCoordinates(coordinates);
    expect(result).toBeDefined(); // Add more assertions based on your logic
  });
});
