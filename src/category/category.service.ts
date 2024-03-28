import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { Book } from 'src/book/entities/book.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: [ 'books'] });
  }

  findOne(id: number): Promise<Category | null> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  create(book: CreateCategoryDto): Promise<Category> {
    const newBook = this.categoryRepository.create({
      ...book,
    });
    return this.categoryRepository.save(newBook);
  }

  update(id: number, updatecategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update({ id }, { ...updatecategoryDto });
  }
}
