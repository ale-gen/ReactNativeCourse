import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { insertPlace } from "../../util/database";
import PrimaryButton from "../UI/PrimaryButton";
import Place from "../../models/Place";

function PlaceTip() {
  const navigation = useNavigation();
  const route = useRoute();
  const [tip, setTip] = useState();

  async function publishHandler() {
    const newPlace = new Place(route.params.image, route.params.location, tip);
    console.log(newPlace);
    newPlace.address = "Example address";
    await insertPlace(newPlace);
    navigation.navigate("TopTab", { place: newPlace });
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.mainContainer}>
        <Text style={styles.text}>
          Give some tip to guess where your photo was taken
        </Text>
        <TextInput
          value={tip}
          onChangeText={setTip}
          autoCapitalize={false}
          style={styles.textInput}
          maxLength={25}
        />
      </Pressable>
      <PrimaryButton
        title={"Publish"}
        disabled={!tip}
        onPress={publishHandler}
        style={styles.button}
      />
    </View>
  );
}

export default PlaceTip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    width: "60%",
    textAlign: "center",
  },
  button: {
    width: "90%",
    marginHorizontal: 20,
  },
});
