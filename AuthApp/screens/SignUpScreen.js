import Form from "../components/Auth/Form";

function SignUpScreen() {
  function signUp() {
    console.log("Sign up...");
  }

  return (
    <Form
      title="Create an account"
      buttonTitle="Sign up"
      repeatPassword={true}
      onSubmit={signUp}
    />
  );
}

export default SignUpScreen;
