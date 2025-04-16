import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(
    name: string,
    email: string,
    phone: string,
    country_code: string,
    role: number,
    encryptedPassword: string,
  ) {
    const newUser = this.userRepository.create({
      name,
      email,
      phone,
      country_code,
      role,
      password: encryptedPassword,
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  async getAllUsers() {
    return this.userRepository.find();

  }
}
