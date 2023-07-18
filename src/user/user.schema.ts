// user.schema.ts

import { Schema, Document } from 'mongoose';

export interface User extends Document {
    username: string;
    password: string;
    isAdmin: boolean;
}

export const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
},
{
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  });
