import { View, StyleSheet } from "react-native";
import { mockPlaces } from "../models/mocks/MockPlaces";
import PlacesList from "../components/Places/PlacesList";
import PrimaryButton from "../components/UI/PrimaryButton";
import { GlobalStyles } from "../constants/styles";

function UserPlacesScreen({ navigation }) {
  function floatingButton() {
    return (
      <View style={styles.floatingButtonContainer}>
        <PrimaryButton
          iconName={"add"}
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate("PickImage");
          }}
        />
      </View>
    );
  }

  return (
    <>
      <PlacesList places={mockPlaces} />
      {floatingButton()}
    </>
  );
}

export default UserPlacesScreen;

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    width: 150,
    elevation: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: GlobalStyles.colors.darkPurple,
  },
});
