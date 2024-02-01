import { Test, TestingModule } from '@nestjs/testing';
import { DistributionSessionController } from './distribution-session.controller';
import { DistributionSessionService } from './distribution-session.service';
import { MockDto, MockService } from '../test/mocks';

describe('DistributionSessionController', () => {
  let controller: DistributionSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributionSessionController],
      providers: [DistributionSessionService],
    })
      .overrideProvider(DistributionSessionService)
      .useValue(MockService)
      .compile();

    controller = module.get<DistributionSessionController>(
      DistributionSessionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a distributionSession', async () => {
    expect(await controller.create(MockDto.distributionSession)).toEqual(
      {
        id: 1,
        ...MockDto.distributionSession,
      },
    );
    expect(MockService.create).toHaveBeenCalledWith(
      MockDto.distributionSession,
    );
  });

  it('should update a distributionSession', async () => {
    expect(
      await controller.update(MockDto.distributionSession, 1),
    ).toEqual({ id: { ...MockDto.distributionSession } });
    expect(MockService.update).toHaveBeenCalledWith(
      MockDto.distributionSession,
      1,
    );
  });
});
