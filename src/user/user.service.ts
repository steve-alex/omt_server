import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = []; // Replace with your database or storage solution

  getUser(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(user: User): User {
    // Implement logic to create a new user
    // You can perform validation and other operations here
    this.users.push(user); // Add to the collection or database
    return user;
  }

  updateUser(id: number, updatedUser: User): User {
    const user = this.getUser(id); // Retrieve the existing user
    // Implement logic to update the user using data from updatedUser
    return user;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(index, 1); // Remove the user from the collection or database
  }
}