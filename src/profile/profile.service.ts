import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find({ relations: ['owner'] });
  }

  findOne(id: number): Promise<Profile | null> {
    return this.profileRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.profileRepository.delete(id);
  }

  create(book: CreateProfileDto): Promise<Profile> {
    const newBook = this.profileRepository.create({
      ...book,
    });
    return this.profileRepository.save(newBook);
  }

  update(id: number, updateprofileDto: UpdateProfileDto) {
    return this.profileRepository.update({ id }, { ...updateprofileDto });
  }
}
