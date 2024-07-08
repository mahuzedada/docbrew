import OptionComponent from "./Option.tsx";
import { IOption } from "../context.ts"; // import the Option component

interface AnswerOptionsProps {
  options: IOption[];
  onOptionSelected: (i: any) => void;
}

function Options({
  options,
  onOptionSelected,
}: AnswerOptionsProps): React.ReactElement {
  return (
    <div className="">
      {options.map((option, index) => (
        <OptionComponent
          key={index}
          option={option}
          onOptionSelected={onOptionSelected}
        />
      ))}
    </div>
  );
}

export default Options;
