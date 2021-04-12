import { model, Schema, Document } from "mongoose";
import { EventModelDocumentInterface } from '../models/EventModel'
export interface FieldModelInterface {
  _id?: string;
  title: string;
  content: string;
  pictures?: Array<String>,
  events?: Array<EventModelDocumentInterface> 
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
