import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Book } from 'src/book/entities/book.entity';
import { Repository } from 'typeorm';
import { Profile } from 'src/profile/entities/profile.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,

    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({ relations: ['books', 'profile'] });
  }

  findOne(id: number): Promise<Owner | null> {
    return this.ownerRepository.findOne({
      where: { id },
      relations: ['books', 'profile'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.ownerRepository.delete(id);
  }

  create(book: CreateOwnerDto): Promise<Owner> {
    const newBook = this.ownerRepository.create({
      ...book,
    });
    return this.ownerRepository.save(newBook);
  }

  update(id: number, updatecategoryDto: UpdateOwnerDto) {
    return this.ownerRepository.update({ id }, { ...updatecategoryDto });
  }
}
