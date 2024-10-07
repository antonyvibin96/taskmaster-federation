import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserInput } from './types/update.user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string, role: string): Promise<User> {
    const user = this.userRepository.create({ name, email, role });
    return this.userRepository.save(user);
  }

  async updateUser(userId: string, input: UpdateUserInput) {
    await this.userRepository.update(userId, input);
    return this.getUserById(userId);
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({where: {userId: id}});
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
