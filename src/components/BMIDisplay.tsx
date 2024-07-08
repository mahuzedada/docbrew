import {useContext, useEffect, useState} from "react";
import "tailwindcss/tailwind.css";
import { QuestionContext } from "../context";

const BMIDisplay: React.FC = () => {
  const { answers } = useContext(QuestionContext);
  const [bmiData, setBmiData] = useState<{ bmi?: number, targetBmi?: number }>({});

  const determineBMICategory = (bmi: number) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obese';
  }

  useEffect(() => {
    if (answers.height && answers.weight) {
      const parseMeasurement = (str: string, pattern: RegExp) => {
        const match = str.match(pattern);
        return match ? parseInt(match[1]) : 0;
      };

      const heightInMeters = (parseMeasurement(answers.height, /(\d+)ft/) * 12 + parseMeasurement(answers.height, /(\d+)in/)) * 0.0254;
      const weightInKg = parseMeasurement(answers.weight, /(\d+)lbs/) * 0.453592;
      const targetWeightInKg = answers.target_weight ? parseMeasurement(answers.target_weight, /(\d+)lbs/) * 0.453592 : null;

      const bmi = parseFloat((weightInKg / (heightInMeters ** 2)).toFixed(2));
      const targetBmi = targetWeightInKg ? parseFloat((targetWeightInKg / (heightInMeters ** 2)).toFixed(2)) : undefined;

      setBmiData({ bmi, targetBmi });
    }
  }, [answers]);

  if (!bmiData.bmi) {
    return null;
  }

  const currentPos = (bmiData.bmi / 40) * 100;
  const targetPos = bmiData.targetBmi ? (bmiData.targetBmi / 40) * 100 : null;
  const { bmi, targetBmi } = bmiData;
  const bmiCategory = determineBMICategory(bmiData.bmi);

  return (
    <div className="flex flex-col rounded shadow-md w-full p-4 bg-gray-900">
      <div className="flex justify-between items-center">
        <div className="text-md font-bold">Body Mass Index (BMI)</div>
        <div className="text-xs">{bmiCategory} - {bmi}</div>
      </div>
      <div className="relative mt-4">
        <div className="absolute h-6 w-full top-0">
          <div className="absolute text-xs" style={{left: `calc(${currentPos}% - 1rem)`}}>You</div>
          { targetBmi && Math.abs(currentPos - (targetPos || 0)) < 10 && (
            <div className="absolute text-xs" style={{left: `calc(${targetPos}% - 3rem)`}}>Target</div>
          )}
          { targetBmi && Math.abs(currentPos - (targetPos || 0)) >= 10 && (
            <div className="absolute text-xs" style={{left: `calc(${(targetPos || 0)}% - 1rem)`}}>Target</div>
          )}
        </div>
        <div className="h-2 mt-6 bg-gradient-to-r from-lime-400 via-green-500 to-yellow-500 rounded" style={{backgroundImage: 'linear-gradient(to right, lime, green, yellow, red)'}}></div>
        <div className="absolute top-6 left-0 h-2 w-2 bg-black rounded-full" style={{left: `calc(${currentPos}% - 0.5rem)`}}></div>

        { targetBmi && (
          <div className="absolute top-6 left-0 h-2 w-2 bg-blue-400 rounded-full" style={{left: `calc(${(targetPos || 0)}% - 0.5rem)`}}></div>
        )}
      </div>
      <div className="flex text-xs justify-between mt-2">
        {["Underweight", "Normal", "Overweight", "Obese"].map(category => (
          <div key={category} className={`${category === bmiCategory ? 'text-white': 'text-gray-400'}`}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMIDisplay;
