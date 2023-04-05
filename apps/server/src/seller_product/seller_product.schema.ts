import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Seller } from '../seller/seller.schema';
import { Product } from '../product/product.schema';
import { Review } from '../review/review.schema';

export type SellerProductDocument = SellerProduct & Document;

@Schema()
export class SellerProduct {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  })
  product: Product;

  @Prop({ required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true })
  seller: Seller;

  @Prop({ unique: true, required: true })
  digitalKey: string;

  @Prop({ enum: ['ACTIVE', 'OUT_OF_STOCK', 'DISCONTINUED'], default: 'ACTIVE' })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Review' })
  review: Review;
}

export const SellerProductSchema = SchemaFactory.createForClass(SellerProduct);
