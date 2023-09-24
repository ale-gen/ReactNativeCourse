import axios from "axios";

const API_KEY = "";

async function authenticate(mode, email, password) {
  let baseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`;
  const response = await axios.post(baseUrl + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response.data.idToken;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
