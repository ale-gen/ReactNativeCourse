import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CategoryGridTile from "../components/cells/CategoryGridTile";
import Spacer from "../components/ui/Spacer";

function CategoriesScreen({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight();

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
      ListHeaderComponent={<Spacer height={20} />}
      ListFooterComponent={<Spacer height={tabBarHeight} />}
    />
  );
}

export default CategoriesScreen;
