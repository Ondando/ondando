import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SellerProduct',
    required: true,
  })
  sellerProduct: string[];

  @Prop({ required: true })
  rating: number;

  @Prop()
  comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
