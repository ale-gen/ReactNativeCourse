import {
  Pressable,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ImageBackground,
} from "react-native";

function CategoryGridTile({ title, imagePath }) {
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
          pressed ? styles.pressed : null,
        ]}
      >
        <ImageBackground
          source={require("../assets/images/german.jpg")}
          resizeMode="cover"
          imageStyle={styles.border}
          style={[styles.innerContainer, styles.shadow]}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  border: {
    borderRadius: 20,
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
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});
