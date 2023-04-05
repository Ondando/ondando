import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Review } from 'src/review/review.schema';
import { Seller } from 'src/seller/seller.schema';
import { Wishlist } from 'src/wishlist/wishlist.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['USER', 'SELLER', 'SYSTEM_MANAGER'] })
  role: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist' })
  wishlists: Wishlist[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Review' })
  reviews: Review[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller' })
  seller: Seller;
}

export const UserSchema = SchemaFactory.createForClass(User);
