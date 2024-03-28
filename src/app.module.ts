import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

import { ProfileModule } from './profile/profile.module';
import { CategoryModule } from './category/category.module';
import { OwnerModule } from './owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { Owner } from './owner/entities/owner.entity';
import { Profile } from './profile/entities/profile.entity';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '1234',
      database: 'bookstore',
      entities: [Book, Owner, Profile, Category],
      synchronize: true,
    }),
    BookModule,
    ProfileModule,
    CategoryModule,
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
