import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../UI/Input";
import PrimaryButton from "../UI/PrimaryButton";
import Subtitle from "../UI/Subtitle";
import Spacer from "../UI/Spacer";

function Form({
  title,
  buttonTitle,
  repeatPassword,
  onSubmit,
  subtitle,
  subtitleButtonTitle,
  onSubtitleButtonPress,
}) {
  const [inputs, setInputs] = useState({
    email: {
      value: "",
      isValid: true,
      errorMessage: "Invalid email.",
    },
    password: {
      value: "",
      isValid: true,
      errorMessage: "Password should contain at least 8 characters.",
    },
  });
  const [repeatedPassword, setRepeatedPassword] = useState({
    value: "",
    isValid: true,
    errorMessage: "Passwords don't match to each other.",
  });

  function inputChangeHandler(inputIdentifier, enteredText) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: {
          value: enteredText,
          isValid:
            inputIdentifier === "email" ? validateEmail() : validatePassword(),
          errorMessage:
            inputIdentifier === "email"
              ? "Invalid email."
              : "Password should contain at least 8 characters.",
        },
      };
    });
  }

  function repeatedPasswordInputHandler(enteredText) {
    setRepeatedPassword(() => {
      return {
        value: enteredText,
        isValid: validateRepeatedPassword(),
        errorMessage: repeatedPassword.errorMessage,
      };
    });
  }

  function submitHandler() {
    const areInputsValid = validateInputs();
    if (!areInputsValid) {
      return;
    }
    const email = inputs.email.value;
    const password = inputs.password.value;
    onSubmit({ email, password });
  }

  function validateInputs() {
    const emailIsValid = !!validateEmail();
    const passwordIsValid = validatePassword();
    setInputs((currentInputValues) => {
      currentInputValues.email.isValid = emailIsValid;
      currentInputValues.password.isValid = passwordIsValid;
      return { ...currentInputValues };
    });
    if (!repeatPassword) {
      return emailIsValid && passwordIsValid;
    }
    const repeatedPasswordIsValid = validateRepeatedPassword();
    setRepeatedPassword((currentRepeatedPassword) => {
      currentRepeatedPassword.isValid = repeatedPasswordIsValid;
      return { ...currentRepeatedPassword };
    });
    return emailIsValid && passwordIsValid && repeatedPasswordIsValid;
  }

  function validateEmail() {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return inputs.email.value.match(emailRegex);
  }

  function validatePassword() {
    return inputs.password.value.length >= 8;
  }

  function validateRepeatedPassword() {
    return (
      repeatedPassword.value.length >= 8 &&
      inputs.password.value === repeatedPassword.value
    );
  }

  return (
    <>
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
      <Spacer />
      <Subtitle
        text={subtitle}
        buttonTitle={subtitleButtonTitle}
        onButtonPress={onSubtitleButtonPress}
        style={styles.subtitle}
      />
    </>
  );
}

export default Form;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
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
  subtitle: {
    marginBottom: deviceHeight * 0.05,
  },
});
