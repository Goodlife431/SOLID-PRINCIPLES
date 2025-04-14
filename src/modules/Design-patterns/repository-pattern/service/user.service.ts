

import { Injectable } from "@nestjs/common";
import { IUser } from "../schema/user.schema";
import { UserRepository } from "./userRepository";


@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  getUsers(): Promise<IUser[]> {
    return this.userRepo.findAll();
  }

  getUser(id: string): Promise<IUser> {
    return this.userRepo.findById(id);
  }

  createUser(data: Partial<IUser>): Promise<IUser> {
    return this.userRepo.create(data);
  }

  deleteUser(id: string): Promise<void> {
    return this.userRepo.delete(id);
  }
}
