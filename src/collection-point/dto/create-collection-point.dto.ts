import { IsArray, IsString } from 'class-validator';
import { DistributionSession } from '../../distribution-session/distribution-session.entity';

export class CreateCollectionPointDto {
  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsArray()
  distributionSessions: DistributionSession[];
}
