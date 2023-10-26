import { Test, TestingModule } from '@nestjs/testing';
import { LocationControllerController } from './location-controller.controller';

describe('LocationControllerController', () => {
  let controller: LocationControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationControllerController],
    }).compile();

    controller = module.get<LocationControllerController>(LocationControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
