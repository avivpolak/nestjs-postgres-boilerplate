import { IsString } from "class-validator";

export class CreateCollectionPointDto {
  @IsString()
  address:string;
}
