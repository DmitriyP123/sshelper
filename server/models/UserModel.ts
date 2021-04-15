import { model, Schema, Document } from "mongoose";

export interface UserModelInterface {
  _id?: string;
  email: string;
  password: string;
  nickname: string;
  about?:string;
  portrait?:string;
  expirience?:string;
  isAdmin?: boolean;
  myEvents?: Array<String>,
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
  portrait: {
    type: String,
    default:'https://img.icons8.com/bubbles/100/000000/user.png'
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
  myEvents:[{
    type: Schema.Types.ObjectId,
    ref: 'Event',
    default:[],
  }],
});

UserSchema.set("toJSON", {
  transform: function (_: any, obj: { password: any }) {
    delete obj.password;
    return obj;
  },
});

export const UserModel = model<UserModelDocumentInterface>("User", UserSchema);
