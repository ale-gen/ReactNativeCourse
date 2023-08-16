import { ActivityIndicator, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import { login } from "../util/auth";
import Form from "../components/Auth/Form";
import Card from "../components/UI/Card";

function LoginScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  async function loginHandler({ email, password }) {
    console.log("Login...");
    setIsLoading(true);
    try {
      await login(email, password);
    } catch {
      Alert.alert("Login failed", "Check your credentials and try again.", [
        { text: "OK", style: "default" },
      ]);
    }
    setIsLoading(false);
  }

  function navigateToSignUp() {
    navigation.replace("SignUp");
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
          title="Login to your account"
          buttonTitle="Login"
          onSubmit={loginHandler}
          subtitle="Don't have an account?"
          subtitleButtonTitle="Sign up"
          onSubtitleButtonPress={navigateToSignUp}
        />
      )}
    </Card>
  );
}

export default LoginScreen;
