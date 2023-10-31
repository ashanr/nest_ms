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
        CoordinatesService, // Add the service here
        {
          provide: getModelToken('Coordinate'), // Mock the model
          useValue: {}, // Provide a mock implementation
        },
      ],
      // imports: [SomeOtherModule], // If needed, import other modules
    }).compile();

    controller = module.get<CoordinatesController>(CoordinatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
