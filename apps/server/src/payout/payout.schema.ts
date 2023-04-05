import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Seller } from '../seller/seller.schema';

export type PayoutDocument = Payout & Document;

@Schema()
export class Payout {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true })
  seller: Seller;

  @Prop({ required: true })
  amount: number;

  @Prop({
    required: true,
    enum: ['PENDING', 'COMPLETED', 'CANCELED'],
    default: 'PENDING',
  })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PayoutSchema = SchemaFactory.createForClass(Payout);
