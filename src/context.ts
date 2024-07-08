import React from "react";

export interface IBaseQuestion {
  id: string;
  text: string;
  dependencies?: IDependency[]; // This question will be shown if all dependencies are satisfied
}

export interface ISingleChoiceQuestion extends IBaseQuestion {
  type: "singleChoice";
  options: IConditionalOption[];
}

export interface IMultiChoiceQuestion extends IBaseQuestion {
  type: "multiChoice";
  options: IConditionalOption[];
}

export interface INumberQuestion extends IBaseQuestion {
  type: "number";
  inputs: string[];
}

export interface ITextQuestion extends IBaseQuestion {
  type: "longText" | "shortText" | "multipleText";
}

export type IQuestion = ISingleChoiceQuestion | IMultiChoiceQuestion | INumberQuestion | ITextQuestion;

export interface IOption {
  title: string;
}

export interface IConditionalOption extends IOption {
  conditions?: ICondition[];  // This option will be shown if all conditions are satisfied
}

export interface IDependency {
  questionId: string; // The ID of the question this one depends on
  expectedResponse: any;  // The expected response to the dependent question for this one to be shown
}

export interface ICondition {
  questionId: string;  // The ID of the question this option depends on
  expectedResponse: any;  // The expected response to make this option visible
}

export interface QuestionnaireContextData {
  questions: Map<string, IQuestion>;
  answers: { [key: string]: any };
  setAnswers: (o: any) => void;
  storedResults:  null | { [key: string]: string | null };
  setStoredResults: (o: any) => void;
}

export const QuestionContext = React.createContext<QuestionnaireContextData>({
  questions: new Map(),
  answers: {},
  setAnswers: () => {},
  storedResults: {},
  setStoredResults: () => {},
});
