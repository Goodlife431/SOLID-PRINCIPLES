
import {Schema, Document } from "mongoose";

// Interface for TypeScript typing
export interface IUser extends Document {
  name: string;
  email: string;
}

// Mongoose schema definition
export const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);
