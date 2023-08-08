import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";

function FavouritesScreen() {
  const favMealsIds = useSelector((state) => state.favouriteMeals.ids);
  const displayedMeals = MEALS.filter((mealItem) => {
    return favMealsIds.includes(mealItem.id);
  });
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You don't have favourite meals yet.</Text>
      </View>
    );
  }
  return <MealsList meals={displayedMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
