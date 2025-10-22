import { IsString } from "class-validator";

export class RouteRequestDto {
  @IsString()
  origin!: string;

  @IsString()
  destination!: string;
}
