import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function Input({ title, inputConfig, isValid, errorMessage }) {
  const [isSecured, setIsSecured] = useState(
    inputConfig && inputConfig.secureTextEntry
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[
          styles.textInput,
          styles.underline,
          !isValid && styles.invalidState,
        ]}
        {...inputConfig}
        secureTextEntry={isSecured}
      />
      {inputConfig &&
        inputConfig.secureTextEntry &&
        inputConfig.value?.length > 0 && (
          <Pressable
            style={styles.secureTextIconContainer}
            onPress={() => setIsSecured(!isSecured)}
          >
            <Ionicons
              name={isSecured ? "md-eye-sharp" : "md-eye-off-sharp"}
              size={20}
              color={"gray"}
            />
          </Pressable>
        )}
      {!isValid && errorMessage && (
        <Text style={styles.invalidText}>{errorMessage}</Text>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  title: {
    color: "gray",
    fontSize: 16,
    fontWeight: "700",
  },
  textInput: {
    height: 50,
    padding: 8,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  invalidState: {
    borderBottomColor: "red",
  },
  invalidText: {
    color: "red",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 3,
  },
  secureTextIconContainer: {
    position: "absolute",
    right: 20,
    top: 30,
    justifyContent: "center",
  },
});
