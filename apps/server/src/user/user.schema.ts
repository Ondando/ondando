import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, unique: true, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop([{ type: String, enum: ['user', 'admin', 'vendor'], default: 'user' }])
  roles: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' })
  vendor: mongoose.Types.ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }])
  orders: mongoose.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
