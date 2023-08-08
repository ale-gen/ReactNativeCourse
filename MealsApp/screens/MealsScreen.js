import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return <MealsList meals={displayedMeals} />;
}

export default MealsScreen;
