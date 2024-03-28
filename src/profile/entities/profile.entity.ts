import { profile } from 'console';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  gender: string;

  @OneToOne(() => Owner, (owner) => owner.profile, {
    nullable: true,
  })
  owner: Owner;
}
