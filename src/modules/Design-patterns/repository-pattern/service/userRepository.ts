// user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../schema/user.schema';


@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('users')
    private readonly userModel: Model<IUser>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<IUser> {
    return this.userModel.findById(id).exec();
  }

  async create(data: Partial<IUser>): Promise<IUser> {
    const createdUser = new this.userModel(data);
    return createdUser.save();
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
