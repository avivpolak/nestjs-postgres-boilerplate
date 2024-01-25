import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MockDto, MockService } from '../test/mocks';

describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue(MockService)
      .compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a order', async () => {
    expect(await controller.create(MockDto.order)).toEqual({
      id: 1,
      ...MockDto.order,
    });
    expect(MockService.create).toHaveBeenCalledWith(MockDto.order);
  });

  it('should update a order', async () => {
    expect(
      await controller.update(
        MockDto.order,
        1,
      ),
    ).toEqual({ id: { ...MockDto.order } });
    expect(MockService.update).toHaveBeenCalledWith(MockDto.order, 1);
  });
});
