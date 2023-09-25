import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import PrimaryButton from "../UI/PrimaryButton";

function PlaceTip() {
  const route = useRoute();
  const [tip, setTip] = useState();

  function publishHandler() {
    console.log(route.params.image);
    console.log(route.params.location);
    console.log(tip);
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
