import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Category } from 'src/category/entities/category.entity';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Owner, (owner) => owner.books, { nullable: true })
  owner: Owner;

  @ManyToMany(() => Category, (category) => category.books, { nullable: true })
  @JoinTable()
  category: Category[];
}
