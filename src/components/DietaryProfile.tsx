import "tailwindcss/tailwind.css";
import {useContext} from "react";
import {QuestionContext} from "../context";

const DietaryProfile: React.FC = () => {
  const { answers } = useContext(QuestionContext);
  return (
    <div className="flex flex-col rounded shadow-md w-full p-4">
      <div className="text-lg font-bold mb-3">Dietary Profile</div>
      <div><strong>Goal:</strong> {answers.diet_goal}</div>
      <div><strong>Allergies:</strong> {answers.allergies}</div>
      <div><strong>Preferred Cuisine:</strong> {answers.preferred_cuisine}</div>
      <div><strong>Dietary Restrictions:</strong> {answers.dietary_restrictions}</div>
      <div><strong>Preferred Carbs:</strong> {answers.preferred_carbs}</div>
      <div><strong>Preferred Protein:</strong> {answers.preferred_protein}</div>
      <div><strong>Preferred Fats:</strong> {answers.preferred_fat}</div>
    </div>
  );
};

export default DietaryProfile;
