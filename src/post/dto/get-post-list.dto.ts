import { IsInt, Min } from "class-validator";

export class GetPostListDto {
  @IsInt()
  @Min(0)
  limit: number;

  @IsInt()
  offset: number;
}
