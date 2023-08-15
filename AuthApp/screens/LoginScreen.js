import Form from "../components/Auth/Form";

function LoginScreen({ navigation }) {
  function login() {
    console.log("Login...");
  }

  function navigateToSignUp() {
    navigation.replace("SignUp");
  }

  return (
    <Form
      title="Login to your account"
      buttonTitle="Login"
      onSubmit={login}
      subtitle="Don't have an account?"
      subtitleButtonTitle="Sign up"
      onSubtitleButtonPress={navigateToSignUp}
    />
  );
}

export default LoginScreen;
