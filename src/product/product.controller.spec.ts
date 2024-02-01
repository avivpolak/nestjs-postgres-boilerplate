import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MockDto, MockService } from '../test/mocks';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    })
      .overrideProvider(ProductService)
      .useValue(MockService)
      .compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    expect(await controller.create(MockDto.product)).toEqual({
      id: 1,
      ...MockDto.product,
    });
    expect(MockService.create).toHaveBeenCalledWith(MockDto.product);
  });

  it('should update a product', async () => {
    expect(
      await controller.update(
        MockDto.product,
        1,
      ),
    ).toEqual({ id: { ...MockDto.product } });
    expect(MockService.update).toHaveBeenCalledWith(MockDto.product, 1);
  });
});
