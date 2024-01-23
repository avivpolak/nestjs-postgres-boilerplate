import { IsArray, IsString } from "class-validator";
import { DistributionSession } from "src/entities/distribution-session.entity";

export class CreateCollectionPointDto {
  @IsString()
  address:string;

  @IsArray()
  distributionSessions:DistributionSession[];
}
