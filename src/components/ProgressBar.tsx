import React, { useContext } from "react";
import { QuestionContext } from "../context.ts";
import BackButton from "./BackButton";

function ProgressBar(): React.ReactElement {
  const { questions, answers } = useContext(QuestionContext);

  const totalQuestions = questions.size;
  const answeredQuestions = Object.keys(answers).filter(
    (key) => !!answers[key],
  ).length + 1;

  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div>
      <BackButton />
      <div className="text-lg font-semibold">
        Step {answeredQuestions}/{totalQuestions}
      </div>
      <div className="w-full h-4 border rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-cyan-600 to-lime-600"
        />
      </div>
    </div>
  );
}

export default ProgressBar;
