import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../user/user.schema';
import { SellerProduct } from '../seller_product/seller_product.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SellerProduct',
    required: true,
  })
  sellerProduct: SellerProduct;

  @Prop({
    required: true,
    enum: ['PENDING', 'PAID', 'REFUNDED'],
    default: 'PENDING',
  })
  paymentStatus: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
