import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../UI/Input";
import PrimaryButton from "../UI/PrimaryButton";

function Form({ title, buttonTitle, repeatPassword, onSubmit }) {
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
  const [repeatedPassword, setRepeatedPassword] = useState({
    value: "",
    isValid: true,
    errorMessage: null,
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

  function repeatedPasswordInputHandler(enteredText) {
    setRepeatedPassword(() => {
      return {
        value: enteredText,
        isValid: true,
        errorMessage: null,
      };
    });
  }

  function submitHandler() {
    validateInputs();
    if (
      inputs.email.isValid &&
      inputs.password.isValid
      // TODO: Check repeat password validation
    ) {
      onSubmit();
    }
  }

  function validateInputs() {
    validateEmail();
    validatePassword();
    if (repeatPassword) {
      validateRepeatedPassword();
    }
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

  function validateRepeatedPassword() {
    const isValid =
      repeatedPassword.value.length >= 8 &&
      inputs.password.value === repeatedPassword.value;
    setRepeatedPassword(() => {
      return {
        value: repeatedPassword.value,
        isValid: isValid,
        errorMessage: isValid ? null : "Passwords don't match to each other.",
      };
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.inputsContainer, repeatPassword && { height: 300 }]}>
        <Input
          title={"Email address"}
          inputConfig={{
            autoCorrect: false,
            autoCapitalize: "none",
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
            secureTextEntry: true,
            onChangeText: inputChangeHandler.bind(this, "password"),
            value: inputs.password.value,
          }}
          isValid={inputs.password.isValid}
          errorMessage={inputs.password.errorMessage}
        />
        {repeatPassword && (
          <Input
            title={"Repeat password"}
            inputConfig={{
              autoCorrect: false,
              secureTextEntry: true,
              onChangeText: repeatedPasswordInputHandler,
              value: repeatedPassword.value,
            }}
            isValid={repeatedPassword.isValid}
            errorMessage={repeatedPassword.errorMessage}
          />
        )}
      </View>
      <PrimaryButton
        title={buttonTitle}
        iconName="md-chevron-forward-sharp"
        onPress={submitHandler}
        style={styles.buttonStyle}
      />
    </View>
  );
}

export default Form;

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
