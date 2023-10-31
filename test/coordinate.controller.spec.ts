import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesController } from '../src/coordinates/coordinates.controller';
import { CoordinatesService } from '../src/coordinates/coordinates.service'; // Import the service
import { getModelToken } from '@nestjs/mongoose'; 

describe('CoordinatesController', () => {
    let controller: CoordinatesController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [CoordinatesController],
        providers: [
          CoordinatesService,
          {
            provide: getModelToken('Coordinate'),
            useValue: {}, // Mock the Mongoose model here
          },
        ],
      }).compile();
  
      controller = module.get<CoordinatesController>(CoordinatesController);
    });
  
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });