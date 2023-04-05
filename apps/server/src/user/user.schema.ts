import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Wishlist } from '../wishlist/wishlist.schema';
import { Review } from '../review/review.schema';
import { Seller } from '../seller/seller.schema';
import { Order } from '../order/order.schema';

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

  @Prop({
    required: true,
    type: [{ type: String, enum: ['USER', 'SELLER', 'SYSTEM_MANAGER'] }],
  })
  roles: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist' }] })
  wishlists: Wishlist[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }] })
  reviews: Review[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller' })
  seller: Seller;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];
}

export const UserSchema = SchemaFactory.createForClass(User);
