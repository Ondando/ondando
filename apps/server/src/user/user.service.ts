import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel
      .find()
      .populate('wishlists')
      .populate('reviews')
      .populate('seller')
      .exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({ email })
      .populate('wishlists')
      .populate('reviews')
      .populate('seller')
      .exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel
      .findById(id)
      .populate('wishlists')
      .populate('reviews')
      .populate('seller')
      .exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, user, { new: true })
      .populate('wishlists')
      .populate('reviews')
      .populate('seller')
      .exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel
      .findByIdAndDelete(id)
      .populate('wishlists')
      .populate('reviews')
      .populate('seller')
      .exec();
  }
}
