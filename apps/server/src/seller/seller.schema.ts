import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { SellerProduct } from 'src/seller_product/seller_product.schema';
import { User } from '../user/user.schema';

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop({ required: true })
  storeName: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SellerProduct' }],
  })
  sellerProducts: SellerProduct[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payout' }] })
  payouts: string[];

  @Prop()
  bankAccount: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
