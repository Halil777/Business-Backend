import { IsString } from 'class-validator';
import { DataType } from '../entities/datum.entity';

export class CreateDatumDto {
  @IsString()
  title_tm: string;

  @IsString()
  title_ru: string;

  @IsString()
  title_en: string;

  @IsString()
  description_tm: string;

  @IsString()
  description_ru: string;

  @IsString()
  description_en: string;

  @IsString()
  short_tm: string;

  @IsString()
  short_ru: string;

  @IsString()
  short_en: string;

  type: DataType;

  order: number = 0;

  @IsString()
  url: string = '';

  assetId?: number | undefined;
  parentId?: number | undefined;
}
