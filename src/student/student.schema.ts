import { Schema, model, Document } from 'mongoose';

export interface Student extends Document {
    spid: string;
    name: string;
    field: string;
    contact: string;
    password: string;
    isStud: boolean;
    isApprove: boolean;
}

export const StudentSchema = new Schema(
    {
        spid: { type: String, required: true },
        name: { type: String, required: true },
        field: { type: String, required: true },
        contact: { type: String, required: true },
        password: { type: String, required: true },
        isStud: { type: Boolean, required: true },
        isApprove: { type: Boolean, required: true , default: false },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    },
);




