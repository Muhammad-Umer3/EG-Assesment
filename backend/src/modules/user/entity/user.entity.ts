import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
} from 'typeorm';
import { PasswordTransformer } from '../transformer/password.transformer';

@Entity({
  name: 'users',
})
export class User {
  @ObjectIdColumn()
  id: string;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}
