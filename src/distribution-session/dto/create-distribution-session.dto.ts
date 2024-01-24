import { IsNumber, IsString } from 'class-validator';

export class CreateDistributionSessionDto {
  @IsString()
  time: string;

  @IsNumber()
  collectionPointID: number;
}
