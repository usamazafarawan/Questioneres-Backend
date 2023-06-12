import { Schema, model, SchemaOptions } from "mongoose";
import { IUser } from "./user.interface";

const ObjectId = Schema.Types.ObjectId;
const opts: SchemaOptions = { toObject: { virtuals: true }, toJSON: { virtuals: true }};

const UserSchema: Schema = new Schema(
    {
        name: {
            first: { type: String, trim: true, required: true },
            middle: { type: String, trim: true },
            last: { type: String, trim: true },
        },
        cellPhone: { type: String, trim: true },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            validate: {
                      validator: (email: any) => email && email.length,
                message: 'Email cannot be blank',
            },
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: (password: any) => password && password.length,
                message: 'Password cannot be blank',
            },
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        token: String,
        role: String
    },
    opts,
);

export const User = model<IUser>('User', UserSchema);
