import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MockDto, MockService } from '../test/mocks';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService],
    })
      .overrideProvider(CustomerService)
      .useValue(MockService)
      .compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a customer', async () => {
    expect(await controller.create(MockDto.customer)).toEqual({
      id: 1,
      ...MockDto.customer,
    });
    expect(MockService.create).toHaveBeenCalledWith(MockDto.customer);
  });

  it('should update a customer', async () => {
    expect(await controller.update(MockDto.customer, 1)).toEqual({
      id: { ...MockDto.customer },
    });
    expect(MockService.update).toHaveBeenCalledWith(MockDto.customer, 1);
  });
});
