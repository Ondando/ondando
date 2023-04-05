import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wishlist, WishlistDocument } from './wishlist.schema';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name) private wishlistModel: Model<WishlistDocument>,
  ) {}

  async findAll(): Promise<Wishlist[]> {
    return this.wishlistModel.find().exec();
  }

  async findOne(id: string): Promise<Wishlist> {
    return this.wishlistModel.findById(id).exec();
  }

  async create(createWishlistDto: Partial<Wishlist>): Promise<Wishlist> {
    const createdWishlist = new this.wishlistModel(createWishlistDto);
    return createdWishlist.save();
  }

  async update(
    id: string,
    updateWishlistDto: Partial<Wishlist>,
  ): Promise<Wishlist> {
    return this.wishlistModel.findByIdAndUpdate(id, updateWishlistDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.wishlistModel.deleteOne({ _id: id }).exec();
    return result.deletedCount !== 0;
  }
}
