import axios from "axios";

export async function authenticate(mode, email, password) {
  let baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`;
  const response = await axios.post(baseUrl + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
  return response;
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
