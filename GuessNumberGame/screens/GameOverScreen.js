import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/gameOver.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.summaryContainer}>
        <InstructionText>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess number <Text style={styles.highlightText}>{userNumber}</Text>!
        </InstructionText>
        <View style={styles.newGameButton}>
          <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: deviceWidth < 380 ? 5 : 10,
    borderColor: Colors.accentColor,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlightText: {
    fontWeight: "bold",
    color: Colors.accentColor,
  },
  summaryContainer: {
    marginTop: 20,
  },
  newGameButton: {
    marginTop: 20,
  },
});
