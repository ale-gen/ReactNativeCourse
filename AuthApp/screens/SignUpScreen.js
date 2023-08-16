import { ActivityIndicator, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import { createUser } from "../util/auth";
import Form from "../components/Auth/Form";
import Card from "../components/UI/Card";

function SignUpScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  async function signUp({ email, password }) {
    setIsLoading(true);
    try {
      await createUser(email, password);
    } catch {
      Alert.alert(
        "Sign up failed",
        "Cannot create an account. Please try again later.",
        [{ text: "OK", style: "default" }]
      );
    }
    setIsLoading(false);
  }

  function navigateToLogin() {
    navigation.replace("Login");
  }

  return (
    <Card>
      {isLoading ? (
        <ActivityIndicator
          size={"large"}
          color={GlobalStyles.colors.darkPurple}
          style={{ flex: 1 }}
        />
      ) : (
        <Form
          title="Create an account"
          buttonTitle="Sign up"
          repeatPassword={true}
          onSubmit={signUp}
          subtitle="Already have an account?"
          subtitleButtonTitle="Sign in"
          onSubtitleButtonPress={navigateToLogin}
        />
      )}
    </Card>
  );
}

export default SignUpScreen;
