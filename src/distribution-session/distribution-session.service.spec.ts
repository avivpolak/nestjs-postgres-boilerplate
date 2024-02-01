import { Test, TestingModule } from '@nestjs/testing';
import { DistributionSessionService } from './distribution-session.service';

describe('DistributionSessionService', () => {
  let service: DistributionSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributionSessionService],
    }).compile();

    service = module.get<DistributionSessionService>(
      DistributionSessionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
