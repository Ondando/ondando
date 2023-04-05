import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get all users
   * @returns {Promise<User | null>} - The found user object Array or null if not found
   */
  @Get()
  async getAllUsers(): Promise<User[] | null> {
    return this.userService.findAllUsers();
  }

  /**
   * Create a new user
   * @param {Partial<User>} user - The user object containing the user details
   * @returns {Promise<User>} - The created user object
   */
  @Post()
  async createUser(@Body() user: Partial<User>): Promise<User> {
    return this.userService.createUser(user);
  }

  /**
   * Get a user by their ID
   * @param {string} id - The ID of the user
   * @returns {Promise<User | null>} - The found user object or null if not found
   */
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  /**
   * Get a user by their EMAIL
   * @param {string} email - The EMAIL of the user
   * @returns {Promise<User | null>} - The found user object or null if not found
   */
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }

  /**
   * Update a user by their ID
   * @param {string} id - The ID of the user
   * @param {Partial<User>} userUpdates - The updates to apply to the user
   * @returns {Promise<User | null>} - The updated user object or null if not found
   */
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdates: Partial<User>,
  ): Promise<User | null> {
    return this.userService.updateUser(id, userUpdates);
  }

  /**
   * Delete a user by their ID
   * @param {string} id - The ID of the user
   * @returns {Promise<User | null>} - The deleted user object or null if not found
   */
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User | null> {
    return this.userService.deleteUser(id);
  }
}
