import { useState } from 'react';
import Question from "./Question";
import {IQuestion} from "../context";


interface Props {
    question: IQuestion;
    onNext: (inputValue: string) => void;
}

const TextQuestion: React.FC<Props> = ({ question, onNext }) => {
  const [inputValue, setInputValue] = useState('');
  const { type } = question;
  const renderInput = () => {
    if (type === 'shortText') {
      return (
        <input
          className="border rounded w-full py-2 px-3 bg-transparent"
          type="text"
          placeholder="Type your answer here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      );
    } else if (type === 'longText') {
      return (
        <textarea
          className="border rounded w-full py-2 px-3 bg-transparent"
          rows={5}
          placeholder="Type your answer here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Question>{question.text}</Question>
      {renderInput()}
      <button
        className="w-full bg-green-500 text-white mt-4 py-2 px-4 rounded-md focus:outline-none transition-colors duration-200 ease-in-out"
        onClick={() => onNext(inputValue)}
      >
                Next
      </button>
    </div>
  );
}

export default TextQuestion;
