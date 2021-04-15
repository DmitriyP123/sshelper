import { model, Schema, Document } from "mongoose";
export interface FieldModelInterface {
  _id?: string;
  title: string;
  content: string;
  address:string;
  pictures?: Array<String>,
  events: Array<String> 
}

export type FieldModelDocumentInterface = FieldModelInterface & Document;

const FieldSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  pictures: [{
    type: String,
    default:[],
  }],
  events:[{
    type: Schema.Types.ObjectId,
    ref: 'Event',
    default:[],
  }],
});

export const FieldModel = model<FieldModelDocumentInterface>("Field", FieldSchema);
