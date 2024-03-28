import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';
import { Owner } from './entities/owner.entity';
import { Category } from 'src/category/entities/category.entity';
import { Profile } from 'src/profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Owner, Category, Profile])],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
