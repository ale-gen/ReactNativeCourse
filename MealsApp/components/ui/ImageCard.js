import { ImageBackground, StyleSheet, View } from "react-native";

function ImageCard({
  imagePath,
  bottomView,
  rightTopCornerView,
  containerStyle,
}) {
  return (
    <ImageBackground
      source={imagePath}
      resizeMode="cover"
      style={[styles.defaultContainer, styles.border, containerStyle]}
    >
      <View style={{ alignItems: "flex-end" }}>{rightTopCornerView}</View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>{bottomView}</View>
    </ImageBackground>
  );
}

export default ImageCard;

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
  },
  border: {
    borderRadius: 20,
    overflow: "hidden",
  },
});
