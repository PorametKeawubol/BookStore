import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { Category } from 'src/category/entities/category.entity';
import { Profile } from 'src/profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Owner, Category,Profile])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
