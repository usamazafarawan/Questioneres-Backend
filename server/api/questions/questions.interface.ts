import { Schema } from "mongoose";

export interface IQuestionnaire {
  _id?: Schema.Types.ObjectId;
  title?: string;
  questionOption: QuestionOptions[];
  questionTime: number,
  marks: number,
  isCorrect?: boolean;
  answer: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface QuestionOptions {
  label: string;
  value: string;
  require: boolean;
  isExist: boolean;
}
