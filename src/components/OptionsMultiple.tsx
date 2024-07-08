import { useLocation } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import {IConditionalOption, IOption, QuestionContext} from "../context";
import NextButton from "./NextButton";

interface OptionsMultipleProps {
    options: IOption[];
    onNext: (answer: string | string[]) => void;
    isFullWidth: boolean;
}

const OptionsMultiple: React.FC<OptionsMultipleProps> = ({ options, onNext, isFullWidth }) => {
  const { answers } = useContext(QuestionContext);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    setSelectedOptions([])
  }, [location]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((o) => o !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  // Check if an option should be displayed based on its conditions
  const shouldDisplayOption = (option: IConditionalOption) => {
    if (!option.conditions) {
      return true;
    }

    return option.conditions.every(condition => {
      const answerForCondition = answers[condition.questionId];

      // Ensure expectedResponse is always an array for easier comparison
      const expectedResponses = Array.isArray(condition.expectedResponse)
        ? condition.expectedResponse
        : [condition.expectedResponse];

      // If answerForCondition is an array, check if any of its values matches any of the expected responses
      if (Array.isArray(answerForCondition)) {
        return answerForCondition.some(answerValue => expectedResponses.includes(answerValue));
      } else {
        return expectedResponses.includes(answerForCondition);
      }
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option, idx) => (
          shouldDisplayOption(option) && (
            <button
              key={idx}
              className={`border ${
                selectedOptions.includes(option.title)
                  ? 'bg-gradient-to-r from-lime-600 to-cyan-600'
                  : ''
              } ${
                isFullWidth ? 'w-full' : 'whitespace-nowrap'
              } py-2 px-4 rounded-md focus:outline-none transition-colors duration-200 ease-in-out`}
              onClick={() => toggleOption(option.title)}
            >
              {option.title}
            </button>
          )
        ))}
      </div>
      <NextButton onClick={() => onNext(selectedOptions)} />
    </div>
  );
}

export default OptionsMultiple;
