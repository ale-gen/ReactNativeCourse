import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/cells/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const spacer = (height) => {
    return <View style={{ height: height }}></View>;
  };

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        imagePath={itemData.item.imagePath}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={spacer(20)}
      ListFooterComponent={spacer(40)}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
});
