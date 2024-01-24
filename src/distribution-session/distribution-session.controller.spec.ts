import { Test, TestingModule } from '@nestjs/testing';
import { DistributionSessionController } from './distribution-session.controller';
import { DistributionSessionService } from './distribution-session.service';

describe('DistributionSessionController', () => {
  let controller: DistributionSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributionSessionController],
      providers: [DistributionSessionService],
    }).compile();

    controller = module.get<DistributionSessionController>(
      DistributionSessionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
