import { PartialType } from '@nestjs/mapped-types';
import { CreateDistributionSessionDto } from './create-distribution-session.dto';

export class UpdateDistributionSessionDto extends PartialType(CreateDistributionSessionDto) {}
