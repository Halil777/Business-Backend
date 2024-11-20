import { Asset } from 'src/assets/entities/asset.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DataType {
  HOME_TITLE = 'home_title',
  HOME_BANNER = 'home_banner',
  HOME_SLIDER = 'home_slider',
  ABOUT_TITLE = 'about_title',
  ABOUT_DESCRIPTION = 'about_description',
  SOCIAL_MEDIA = 'social_media',
  PORTFOLIA_ITEM = 'portfolia_item',
  PORTFOLIA_TITLE = 'portfolia_title',
  LOGO = 'logo',
  SITE_MUSIC = 'site_music',
  SERVICE_TITLE = 'service_title',
  SERVICE_ITEM = 'service_item',
  CONTACT_THEME = 'contact_theme',
  SERVICE_SLIDE = 'service_slide',
}

@Entity()
export class Datum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title_tm: string;

  @Column()
  title_ru: string;

  @Column()
  title_en: string;

  @Column()
  description_tm: string;

  @Column()
  description_ru: string;

  @Column()
  description_en: string;

  @Column()
  short_tm: string;

  @Column()
  short_ru: string;

  @Column()
  short_en: string;

  @Column({
    type: 'enum',
    enum: DataType,
  })
  type: DataType;

  @Column({
    default: 0,
  })
  order: number;

  @ManyToOne(() => Datum, (data) => data.parent)
  parent?: Datum;

  @Column()
  url: string;

  @ManyToOne(() => Asset, (asset) => asset.data)
  asset?: Asset;

  @Column({
    default: null,
  })
  assetId?: number;

  @Column({
    default: null,
  })
  parentId?: number;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}
