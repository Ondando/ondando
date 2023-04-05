import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  roles?: ("user" | "admin" | "vendor")[];
  vendor?: mongoose.Types.ObjectId;
  orders?: mongoose.Types.ObjectId[];
}
