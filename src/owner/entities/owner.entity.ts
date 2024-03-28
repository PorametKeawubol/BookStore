import { Book } from 'src/book/entities/book.entity';
import { Category } from 'src/category/entities/category.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.owner, {
    nullable: true,
    cascade: true,
  })
  books: Book[];

  @OneToOne(() => Profile, (profile) => profile.owner, {
    nullable: true,
  })
  @JoinColumn()
  profile: Profile;
}
