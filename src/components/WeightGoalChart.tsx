import "tailwindcss/tailwind.css";
import {useContext} from "react";
import {QuestionContext} from "../context";

const WeightGoalChart: React.FC = () => {
  const { answers: data } = useContext(QuestionContext);
  if (!data.weight || !data.target_weight) {
    return null;
  }
  const currentWeight = parseInt(data?.weight?.match(/(\d+)lbs/)[1] || '0');
  const targetWeight = parseInt(data?.target_weight?.match(/(\d+)lbs/)[1] || '0');

  const maxBarHeight = 200; // pixels

  const currentHeight = (currentWeight / (targetWeight > currentWeight ? targetWeight : currentWeight + 50)) * maxBarHeight;
  const targetHeight = (targetWeight / (targetWeight > currentWeight ? targetWeight : currentWeight + 50)) * maxBarHeight;

  return (
    <div className="flex flex-col rounded shadow-md w-full p-4">
      <div className="text-lg font-bold mb-3">Weight Goal Chart</div>

      <div className="flex items-end h-[200px]">
        <div className="mr-2">
          <div className="bg-blue-500 w-10" style={{ height: `${currentHeight}px` }}></div>
        </div>
        <div>
          <div className="bg-green-500 w-10" style={{ height: `${targetHeight}px` }}></div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500"></div>
          <span>Current ({currentWeight} lbs)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500"></div>
          <span>Target ({targetWeight} lbs)</span>
        </div>
      </div>
    </div>
  );
};

export default WeightGoalChart;
