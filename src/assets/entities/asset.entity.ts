import { Datum } from 'src/data/entities/datum.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asset {
  @PrimaryGeneratedColumn() id: number;

  @Column()
  url: string;

  @Column()
  type: string;

  @Column()
  blurhash: string;

  @OneToMany(() => Datum, (data) => data.asset, {
    onDelete: 'CASCADE',
  })
  data?: Datum[];
}
