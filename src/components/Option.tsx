import { IOption } from "../context.ts";

interface OptionProps {
  option: IOption;
  onOptionSelected: (t: string) => void;
}

function Option({ option, onOptionSelected }: OptionProps): React.ReactElement {
  const { title } = option;

  return (
    <div
      onClick={() => onOptionSelected(title)}
      className="h-12 mb-4 items-center cursor-pointer rounded overflow-hidden shadow-2xl"
    >
      <div className="">
        <div className="font-bold text-md">{title}</div>
      </div>
    </div>
  );
}

export default Option;
