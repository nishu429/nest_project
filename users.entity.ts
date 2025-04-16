import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  country_code: string;

  @Column()
  role: number; 

  @Column()
password: string;
}
