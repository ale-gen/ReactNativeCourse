import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const spacer = () => {
    return <View style={{ height: 40 }}></View>;
  };

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals", {
        categoryId: itemData.item.id,
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
      ListFooterComponent={spacer}
    />
  );
}

export default CategoriesScreen;
