import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../cells/MealItem";
import Spacer from "../ui/Spacer";

function MealsList({ meals }) {
  function renderMeal(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        keyExtractor={(meal) => meal.id}
        ListHeaderComponent={<Spacer height={20} />}
        ListFooterComponent={<Spacer height={20} />}
        style={{ paddingRight: 8 }}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
