import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from 'src/category/category.schema';
import { Wishlist } from '../wishlist/wishlist.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
  tags: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  longDescription: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: [String] })
  additionalImages: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist' }] })
  wishlists: Wishlist[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
