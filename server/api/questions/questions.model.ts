import { Schema, model } from "mongoose";
import { IQuestionnaire } from "./questions.interface";

let QuestionnaireSchema: Schema<IQuestionnaire> = new Schema({
  title: { type: String, required: true},
  questionOption: [
    {
      label: { type: String},
      value: { type: String},
      require: { type: Boolean },
      isExist: { type: Boolean },
    },
  ],
  answer: { type: String },
  questionTime: {type:Number},
  marks: {type:Number},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  
});

export const Questions = model<IQuestionnaire>("Questions", QuestionnaireSchema);
