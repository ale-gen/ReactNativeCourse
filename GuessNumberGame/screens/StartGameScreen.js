import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Please enter number between 1 and 99", [
        { text: "Ok", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: "padding", android: "height" })}
      style={styles.rootContainer}
    >
      <Title>Enter a number</Title>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            inputMode="numeric"
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={resetInputHandler}
            outerContainerStyle={styles.resetButtonOuterContainer}
            innerContainerStyle={styles.resetButtonInnerContainer}
          >
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight > 700 ? 100 : 50,
    marginHorizontal: 20,
  },
  textInputContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginBottom: 30,
  },
  numberInput: {
    height: 70,
    width: 60,
    fontSize: 45,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 2,
    color: "white",
    textAlign: "center",
  },
  numberInputShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.accentColor,
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonsContainer: {
    flex: 4,
    marginBottom: 50,
  },
  buttonContainer: {},
  resetButtonOuterContainer: {
    borderColor: Colors.accentColor,
    borderWidth: 2,
  },
  resetButtonInnerContainer: {
    backgroundColor: Colors.primaryBackground,
  },
});
