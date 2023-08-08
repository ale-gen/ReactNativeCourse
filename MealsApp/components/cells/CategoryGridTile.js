import { BlurView } from "expo-blur";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Platform,
} from "react-native";
import ImageCard from "../ui/ImageCard";

function CategoryGridTile({ title, imagePath, onPress }) {
  const { width, height } = useWindowDimensions();
  const gridTileWidth = width / 4;
  const gridTileHeight = 2 * gridTileWidth;

  return (
    <View
      style={[
        styles.container,
        { height: gridTileHeight, width: gridTileWidth },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonContainer,
          styles.border,
          styles.shadow,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <ImageCard
          imagePath={imagePath}
          bottomView={
            <BlurView intensity={30} style={styles.titleContainer}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </BlurView>
          }
        />
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  border: {
    borderRadius: 20,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: -4, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  titleContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
