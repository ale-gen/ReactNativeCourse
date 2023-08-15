import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../components/UI/Input";
import PrimaryButton from "../components/UI/PrimaryButton";

function LoginScreen() {
  const [inputs, setInputs] = useState({
    email: {
      value: "",
      isValid: true,
      errorMessage: null,
    },
    password: {
      value: "",
      isValid: true,
      errorMessage: null,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredText) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: {
          value: enteredText,
          isValid: true,
          errorMessage: null,
        },
      };
    });
  }

  function loginHandler() {
    validateInputs();
  }

  function validateInputs() {
    validateEmail();
    validatePassword();
  }

  function validateEmail() {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!inputs.email.value.match(emailRegex)) {
      setInputs((currentInputs) => {
        return {
          ...currentInputs,
          email: {
            value: inputs.email.value,
            isValid: false,
            errorMessage: "Invalid email address.",
          },
        };
      });
    }
  }

  function validatePassword() {
    const isValid = inputs.password.value.length >= 8;
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        password: {
          value: inputs.password.value,
          isValid: isValid,
          errorMessage: isValid
            ? null
            : "Password should contains at least 8 characters.",
        },
      };
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Login to your account</Text>
      <View style={styles.inputsContainer}>
        <Input
          title={"Email address"}
          inputConfig={{
            autoCorrect: false,
            keyboardType: "email-address",
            clearButtonMode: "while-editing",
            onChangeText: inputChangeHandler.bind(this, "email"),
            value: inputs.email.value,
          }}
          isValid={inputs.email.isValid}
          errorMessage={inputs.email.errorMessage}
        />
        <Input
          title={"Password"}
          inputConfig={{
            autoCorrect: false,
            keyboardType: "email-address",
            secureTextEntry: true,
            onChangeText: inputChangeHandler.bind(this, "password"),
            value: inputs.password.value,
          }}
          isValid={inputs.password.isValid}
          errorMessage={inputs.password.errorMessage}
        />
      </View>
      <PrimaryButton
        title="Login"
        iconName="md-chevron-forward-sharp"
        onPress={loginHandler}
        style={styles.buttonStyle}
      />
    </View>
  );
}

export default LoginScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
    marginVertical: 30,
  },
  inputsContainer: {
    height: deviceHeight > 800 ? 200 : 150,
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  buttonStyle: {
    marginTop: 30,
  },
});
