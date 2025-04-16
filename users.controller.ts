import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './users.service';
import * as CryptoJS from 'crypto-js';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() body: any) {
    const { name, email, phone, country_code, password } = body;
    const role = 1;

    const SECRET_KEY = 'mySecretKey123';
    const encryptedPassword = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();

    const user = await this.userService.createUser(
      name,
      email,
      phone,
      country_code,
      role,
      encryptedPassword,
    );

    return { message: 'User created successfully', user };
  }

  @Get('alluser')
  async findAll() {
    const users = await this.userService.getAllUsers();
    return { message: 'Users fetched successfully', users };
  }
}
