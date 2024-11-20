import { BadRequestException, Injectable } from '@nestjs/common';
import { Asset } from './entities/asset.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unlink } from 'fs';
import { extname } from 'path';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private usersRepository: Repository<Asset>,
  ) {}
  async create(file: Express.Multer.File) {
    const asset = new Asset();
    asset.url = file.path;
    asset.type = 'image';
    asset.blurhash = 'dhjsgidfgsuyygfduys';
    return await this.usersRepository.save(asset);
  }

  async findAll() {
    const data = await this.usersRepository.find({
      order: {
        id: 'DESC',
      },
    });
    return data.map((it) => {
      return {
        ...it,
        url: `${process.env.IMAGE_URL}/${it.url}`,
      };
    });
  }

  async remove(id: number) {
    try {
      const asset = await this.usersRepository.findOneBy({ id: id });
      if (asset) {
        unlink(asset.url, () => {});
        return this.usersRepository.remove(asset);
      } else {
        throw new BadRequestException('Asset Not found');
      }
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err);
    }
  }
}

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};
