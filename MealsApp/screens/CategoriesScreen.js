import { FlatList, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
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
    <BlurView intensity={40} tint="default" style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </BlurView>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
