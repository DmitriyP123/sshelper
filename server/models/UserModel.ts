import { model, Schema, Document } from "mongoose";

export interface UserModelInterface {
  _id?: string;
  email: string;
  password: string;
  nickname: string;
  about?:string;
  expirience?:string;
  isAdmin?: boolean;
}

export type UserModelDocumentInterface = UserModelInterface & Document;

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  nickname: {
    unique: true,
    required: true,
    type: String,
  },
  about: {
    type: String,
  },
  expirience: {
    type:String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.set("toJSON", {
  transform: function (_: any, obj: { password: any }) {
    delete obj.password;
    return obj;
  },
});

export const UserModel = model<UserModelDocumentInterface>("User", UserSchema);
