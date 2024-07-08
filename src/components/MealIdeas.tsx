import EmailDialog from "./EmailDialog";

type MealIdea = {
    title: string;
    description: string;
    nutrition_information: {
        calories_per_serving: string;
        protein_content: string;
        fat_content: string;
        sugar_content: string;
    };
};

type MealIdeasProps = {
    data: {
        breakfast_idea: MealIdea;
        lunch_idea: MealIdea;
        dinner_idea: MealIdea;
        snack_idea: MealIdea;
    };
};

const MealIdeas: React.FC<MealIdeasProps> = ({ data }: MealIdeasProps) => {
  const mealTypeDisplay: any = {
    breakfast_idea: 'Breakfast',
    lunch_idea: 'Lunch',
    dinner_idea: 'Dinner',
    snack_idea: 'Snack'
  };

  return (
    <div className="pt-8 space-y-8">
      {Object.keys(data).map((mealType: keyof {
          breakfast_idea: MealIdea;
          lunch_idea: MealIdea;
          dinner_idea: MealIdea;
          snack_idea: MealIdea;
      }) => (
        <div key={mealType} className="bg-gray-200 rounded-xl shadow-md p-4 border border-gray-50">
          <div
            style={{
              background: 'linear-gradient(25deg, red, purple, blue)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            <h2 className="text-2xl font-bold mb-2">{mealTypeDisplay[mealType]}</h2>
            <h3 className="text-xl font-semibold mb-1">{data[mealType].title}</h3>
            <p className="mb-4">{data[mealType].description}</p>
            <div className="mt-4">
              <h4 className="text-lg font-medium mb-2 underline">Nutrition</h4>
              <p><strong>Calories:</strong> {data[mealType].nutrition_information.calories_per_serving}</p>
              <p><strong>Protein:</strong> {data[mealType].nutrition_information.protein_content}</p>
              <p><strong>Fat:</strong> {data[mealType].nutrition_information.fat_content}</p>
              <p><strong>Sugar:</strong> {data[mealType].nutrition_information.sugar_content}</p>
            </div>
            <EmailDialog />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealIdeas;
