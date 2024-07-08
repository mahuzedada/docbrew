import {useEffect, useState} from 'react';
import NextButton from "./NextButton";

interface Props {
  labels: string[];
  onNext: (answer: string) => void;
}

const MultiInput = ({ labels, onNext }: Props) => {
  const [values, setValues] = useState<Record<string, string>>(getInitialValue(labels));

  function getInitialValue(labels: any[]) {
    return labels.reduce((acc: any, label: string) => ({ ...acc, [label]: '' }), {});
  }
  useEffect(() => {
    const initialValue = getInitialValue(labels);
    setValues(initialValue);
  }, [labels]);

  const handleInputChange = (label: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [label]: value }));
  };

  return (
    <div className="m-auto">
      <div className="flex space-x-1">
        {labels.map((label) => (
          <div key={label} className="flex items-center">
            <input
              type="number"
              id={label}
              value={values[label]}
              onChange={(e) => {
                handleInputChange(label, e.target.value);
              }}
              placeholder="0"
              className="w-24 p-2 text-right text-5xl bg-transparent focus:ring-0 focus:outline-none"
            />
            <label htmlFor={label} className={`text-sm ${values[label] ? 'text-gray-50' : 'text-gray-400'} font-medium`}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <NextButton onClick={() => {
        onNext(Object.keys(values).map((key) => `${values[key] || 0}${key}`).join(' '));
      }} />
    </div>
  );
};

export default MultiInput;
