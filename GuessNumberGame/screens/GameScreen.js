import {
  Text,
  StyleSheet,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import GuessNumberCell from "../components/game/GuessNumberCell";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  function nextGuessHandler(direction) {
    if (validateUserTip(direction)) {
      if (direction === "lower") {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }
      const newGuessNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newGuessNumber);
      setGuessRounds((prevGuessRounds) => [newGuessNumber, ...prevGuessRounds]);
    }
  }

  function validateUserTip(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("You lied!", "You know that your tip is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <View style={styles.numberContainer}>
        <NumberContainer>{currentGuess.toString()}</NumberContainer>
      </View>
      <InstructionText>Lower or greater?</InstructionText>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={18} />
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={18} />
        </PrimaryButton>
      </View>
      <View style={styles.logsContainer}>
        {guessRounds.length > 0 && <InstructionText>Guesses:</InstructionText>}
        <View style={styles.guessesContainer}>
          {/* {guessRounds.map((guessRound) => (
            <GuessNumberCell key={guessRound} value={guessRound} />
          ))} */}
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessNumberCell
                key={itemData.item}
                value={itemData.item}
                roundNumber={guessRounds.length - itemData.index}
              />
            )}
            numColumns={3}
            keyExtractor={(guessRound) => guessRound}
          />
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    marginTop: 100,
    marginHorizontal: 20,
  },
  numberContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 4,
  },
  logsContainer: {
    flex: 6,
    marginBottom: 20,
  },
  guessesContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
