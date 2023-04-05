import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  /**
   * Create a new user
   * @param {Partial<User>} user - The user object containing the user details
   * @returns {Promise<User>} - The created user object
   */
  async createUser(user: Partial<User>): Promise<User> {
    try {
      const newUser = new this.userModel(user);
      return await newUser.save();
    } catch (error) {
      throw new BadRequestException('Error creating user', error.message);
    }
  }

  /**
   * Find a user by their email
   * @param {string} email - The email of the user
   * @returns {Promise<User | null>} - The found user object or null if not found
   */
  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.userModel.findOne({ email }).exec();
    } catch (error) {
      throw new NotFoundException('Error finding user by email', error.message);
    }
  }

  /**
   * Find all users
   * @returns {Promise<User | null>} - The found user object or null if not found
   */
  async findAllUsers(): Promise<User[] | null> {
    try {
      const users = await this.userModel.find().exec();
      return users;
    } catch (error) {
      throw new NotFoundException('Error finding users', error.message);
    }
  }

  /**
   * Find a user by their ID
   * @param {string} id - The ID of the user
   * @returns {Promise<User | null>} - The found user object or null if not found
   */

  async findById(id: string): Promise<User | null> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) throw new NotFoundException('User not found');
      return user;
    } catch (error) {
      throw new NotFoundException('Error finding user by ID', error.message);
    }
  }

  /**
   * Update a user by their ID
   * @param {string} id - The ID of the user
   * @param {Partial<User>} userUpdates - The updates to apply to the user
   * @returns {Promise<User | null>} - The updated user object or null if not found
   */

  async updateUser(
    id: string,
    userUpdates: Partial<User>,
  ): Promise<User | null> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(id, userUpdates, { new: true })
        .exec();
      if (!updatedUser) throw new NotFoundException('User not found');
      return updatedUser;
    } catch (error) {
      throw new BadRequestException('Error updating user', error.message);
    }
  }

  /**
   * Delete a user by their ID
   * @param {string} id - The ID of the user
   * @returns {Promise<User | null>} - The deleted user object or null if not found
   */
  async deleteUser(id: string): Promise<User | null> {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
      if (!deletedUser) throw new NotFoundException('User not found');
      return deletedUser;
    } catch (error) {
      throw new NotFoundException('Error deleting user', error.message);
    }
  }
}
