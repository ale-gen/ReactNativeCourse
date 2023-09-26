import {
  Pressable,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

function PlaceItem({ place, onSelect }) {
  const image = { uri: place.imageUri };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles.shadow,
        styles.border,
        pressed && styles.pressed,
      ]}
      onPress={onSelect.bind(this, place)}
    >
      <ImageBackground style={[styles.border, styles.image]} source={image} />
    </Pressable>
  );
}

export default PlaceItem;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    height: deviceHeight > 800 ? 300 : 200,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  border: {
    borderRadius: 20,
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 4 },
    elevation: 20,
  },
  pressed: {
    opacity: 0.5,
    shadowOpacity: 0,
  },
});
