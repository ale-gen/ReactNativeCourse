import { Text } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import LargeTitleHeaderContainer from "../components/UI/LargeTitleHeaderContainer";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState();
  const authToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    axios
      .get(
        "https://react-native-expense-tra-d2b67-default-rtdb.firebaseio.com/message.json?auth=" +
          authToken
      )
      .then((response) => setFetchedMessage(response.data));
  }, [authToken]);

  return (
    <LargeTitleHeaderContainer>
      <Text>Welcome screen</Text>
      <Text>{fetchedMessage}</Text>
    </LargeTitleHeaderContainer>
  );
}

export default WelcomeScreen;
