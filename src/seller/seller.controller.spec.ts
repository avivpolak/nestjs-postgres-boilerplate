import { Test, TestingModule } from '@nestjs/testing';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { MockDto, MockService } from '../test/mocks';

describe('SellerController', () => {
  let controller: SellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerController],
      providers: [SellerService],
    })
      .overrideProvider(SellerService)
      .useValue(MockService)
      .compile();

    controller = module.get<SellerController>(SellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a seller', async () => {
    expect(await controller.create(MockDto.seller)).toEqual({
      id: 1,
      ...MockDto.seller,
    });
    expect(MockService.create).toHaveBeenCalledWith(MockDto.seller);
  });

  it('should update a seller', async () => {
    expect(
      await controller.update(
        MockDto.seller,
        1,
      ),
    ).toEqual({ id: { ...MockDto.seller } });
    expect(MockService.update).toHaveBeenCalledWith(MockDto.seller, 1);
  });
});
