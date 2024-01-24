import { IsArray, IsString } from 'class-validator';
import { DistributionSession } from 'src/distribution-session/distribution-session.entity';

export class CreateCollectionPointDto {
  @IsString()
  address: string;

  @IsArray()
  distributionSessions: DistributionSession[];
}
