import {Answer} from "./Answer"

export interface Question {
    _id?: string;
    question: string;
    answer: Answer;
    hint: string;
    difficulty: string
  }