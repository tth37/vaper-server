import { IsInt, Min } from "class-validator";

export class DeletePostDto {
  @IsInt()
  @Min(1)
  id: number;
}
