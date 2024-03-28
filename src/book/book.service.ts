import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
    @InjectRepository(Category)
    private categotyRepository: Repository<Category>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['owner', 'category'] });
  }

  findOne(id: number): Promise<Book | null> {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['owner', 'category'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  create(book: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create({
      ...book,
    });
    return this.bookRepository.save(newBook);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update({ id }, { ...updateBookDto });
  }

  // async addUserToCat(id: number, addUserDto: CreateUserDto) {
  //   const cat = await this.catRepository.findOne({
  //     where: { id },
  //     relations: ['user'],
  //   });
  //   if (!cat) {
  //     throw new HttpException('Cat not found', HttpStatus.BAD_REQUEST);
  //   }

  //   const newUser = this.userRepository.create({
  //     ...addUserDto,
  //     createdAt: new Date(),
  //     cats: [cat],
  //   });
  //   return this.userRepository.save(newUser);
  // }

  // async addUserToCatByID(
  //   id: number,
  //   userId: number,
  //   updateCatDto: UpdateCatDto,
  // ) {
  //   const cat = await this.catRepository.findOne({
  //     where: { id },
  //     relations: ['user'],
  //   });
  //   if (!cat) {
  //     throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  //   }

  //   const user = await this.userRepository.findOne({ where: { id: userId } });
  //   if (!user) {
  //     throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
  //   }

  //   cat.user = user;
  //   return this.catRepository.save(cat).then(() => cat);
  // }
}
