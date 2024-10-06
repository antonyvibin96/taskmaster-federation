import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    { userId: '1', name: 'Philona', email: 'phil@yopmail.com', role: 'ase' },
    { userId: '2', name: 'Antony', email: 'antony@yopmail.com', role: 'atl' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(userId: string): User {
    return this.users.find(user => user.userId === userId);
  }
}
