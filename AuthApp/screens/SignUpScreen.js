import { ActivityIndicator } from "react-native";
import { createUser } from "../util/auth";
import { useState } from "react";
import Form from "../components/Auth/Form";

function SignUpScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState();

  async function signUp({ email, password }) {
    setIsLoading(true);
    await createUser(email, password);
    setIsLoading(false);
  }

  function navigateToLogin() {
    navigation.replace("Login");
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Form
      title="Create an account"
      buttonTitle="Sign up"
      repeatPassword={true}
      onSubmit={signUp}
      subtitle="Already have an account?"
      subtitleButtonTitle="Sign in"
      onSubtitleButtonPress={navigateToLogin}
    />
  );
}

export default SignUpScreen;
