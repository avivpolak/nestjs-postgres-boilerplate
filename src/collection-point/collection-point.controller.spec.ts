import { Test, TestingModule } from '@nestjs/testing';
import { CollectionPointController } from './collection-point.controller';
import { CollectionPointService } from './collection-point.service';
import { MockDto, MockService } from '../test/mocks';

describe('CollectionPointController', () => {
  let controller: CollectionPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionPointController],
      providers: [CollectionPointService],
    })
      .overrideProvider(CollectionPointService)
      .useValue(MockService)
      .compile();

    controller = module.get<CollectionPointController>(CollectionPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a collectionPoint', async () => {
    expect(await controller.create(MockDto.collectionPoint)).toEqual({
      id: 1,
      ...MockDto.collectionPoint,
    });
    expect(MockService.create).toHaveBeenCalledWith(MockDto.collectionPoint);
  });

  it('should update a collectionPoint', async () => {
    expect(
      await controller.update(
        MockDto.collectionPoint,
        1,
      ),
    ).toEqual({ id: { ...MockDto.collectionPoint } });
    expect(MockService.update).toHaveBeenCalledWith(MockDto.collectionPoint, 1);
  });
});
