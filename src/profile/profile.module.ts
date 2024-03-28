import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Profile } from './entities/profile.entity';
import { Category } from 'src/category/entities/category.entity';
import { Book } from 'src/book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner, Profile, Category, Book])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
