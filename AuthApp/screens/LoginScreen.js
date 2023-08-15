import Form from "../components/Auth/Form";

function LoginScreen() {
  function login() {
    console.log("Login...");
  }
  return (
    <Form title="Login to your account" buttonTitle="Login" onSubmit={login} />
  );
}

export default LoginScreen;
