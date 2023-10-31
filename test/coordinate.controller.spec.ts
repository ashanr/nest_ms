import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesController } from '../src/coordinates/coordinates.controller';
import { CoordinatesService } from '../src/coordinates/coordinates.service'; // Import the service

describe('CoordinatesController', () => {
  let controller: CoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoordinatesController],
      providers: [CoordinatesService], // Add the service here
      // imports: [SomeOtherModule], // If needed, import other modules
    }).compile();

    controller = module.get<CoordinatesController>(CoordinatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
