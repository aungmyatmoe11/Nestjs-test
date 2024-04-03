import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Aung' },
    { id: 1, name: 'Myat' },
    { id: 2, name: 'Moe' }
  ]; // TODO: d mr ka database nk chate mr

  findAll(name?: string): User[] {
    if (name) return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase())); // ? name filter

    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
