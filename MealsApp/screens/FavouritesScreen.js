import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouritesScreen() {
  const favMealsContext = useContext(FavouritesContext);
  const displayedMeals = MEALS.filter((mealItem) => {
    return favMealsContext.ids.includes(mealItem.id);
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
