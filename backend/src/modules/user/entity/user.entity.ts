import { Entity, Column, ObjectIdColumn } from 'typeorm';

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
  })
  password: string;

  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}
