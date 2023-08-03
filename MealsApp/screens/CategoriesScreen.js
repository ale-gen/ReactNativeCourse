import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen() {
  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        imagePath={itemData.item.imagePath}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
