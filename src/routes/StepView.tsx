import { useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { QuestionContext } from "../context.ts";
import FormStep from "../components/FormStep";
import ProgressBar from "../components/ProgressBar.tsx";
import useNext from "../useNext.ts";
import BMIDisplay from "../components/BMIDisplay";

function StepView(): React.ReactElement | null {
  const { questions, answers, setAnswers } = useContext(QuestionContext);
  const { questionId } = useParams();
  const next = useNext();

  const handleOptionSelected = useCallback(
    (selectedOption: string) => {
      setAnswers({
        ...answers,
        [questionId!]: selectedOption,
      });
      next();
    },
    [questionId],
  );

  const question = questions.get(questionId!);
  if (!question) {
    console.error(`No question found with id ${questionId}`);
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <ProgressBar />
      <BMIDisplay />
      <FormStep question={question} onOptionSelected={handleOptionSelected} />
    </div>
  );
}

export default StepView;
