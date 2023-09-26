import { View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";
import { useEffect } from "react";

function PlaceDetails({ route }) {
  const place = route.params.place;

  return (
    <View style={styles.container}>
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <PrimaryButton title={"Guess location"} style={styles.button} />
    </View>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    width: "90%",
    marginHorizontal: 20,
  },
});
