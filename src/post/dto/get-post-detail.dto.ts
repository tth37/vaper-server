import { IsInt, Min } from "class-validator";

export class GetPostDetailDto {
  @IsInt()
  @Min(1)
  id: number;
}
