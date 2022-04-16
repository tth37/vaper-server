import { IsInt, IsString, Min } from "class-validator";

export class UpdatePostDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  title: string;

  @IsString()
  abstract: string;

  @IsString()
  content: string;
}
