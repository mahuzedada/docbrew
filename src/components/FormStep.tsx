import Question from "./Question";
import Options from "./Options";
import { IQuestion } from "../context.ts";
import OptionsMultiple from "./OptionsMultiple";
import MultiInput from "./MultiInput";
import TextQuestion from "./TextQuestion";
import TextQuestionMultiple from "./TextQuestionMultiple";

interface FormStepProps {
  question: IQuestion;
  onOptionSelected: (i: any) => void;
}

function FormStep({
  question,
  onOptionSelected,
}: FormStepProps): React.ReactElement {
  if ("inputs" in question && question.inputs) {
    return (
      <div className="flex flex-col gap-4">
        <Question>{question.text}</Question>
        <MultiInput onNext={onOptionSelected} labels={question.inputs} />
      </div>
    );
  }
  if ("options" in question && question.options) {
    return (
      <div className="flex flex-col gap-4">
        <Question>{question.text}</Question>
        {
          question.type === 'multiChoice' && question.options ?
            <OptionsMultiple options={question.options} onNext={onOptionSelected} isFullWidth={false} />
            : <Options
              options={question.options}
              onOptionSelected={onOptionSelected}
            />
        }
      </div>
    );
  }
  if (question.type === 'multipleText') {
    return (
      <div className="flex flex-col gap-4">
        <Question>{question.text}</Question>
        <TextQuestionMultiple onNext={onOptionSelected} />
      </div>
    );
  }
  return <TextQuestion question={question} onNext={onOptionSelected} />;
}

export default FormStep;
