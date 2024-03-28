import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Category } from './entities/category.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Owner } from 'src/owner/entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Category,Profile,Owner])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
