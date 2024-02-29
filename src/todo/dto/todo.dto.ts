import { IsBoolean, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  value: string;

  @IsBoolean()
  isCompleted: boolean;
}
