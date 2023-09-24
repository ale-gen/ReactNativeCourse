import { View, Pressable, StyleSheet, Alert, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useRef, useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import ActionSheet from "react-native-actionsheet";

function LocationPicker() {
  const actionSheet = useRef();
  const [locationPermissions, setLocationPermissions] =
    useForegroundPermissions();
  const locationChoiceOptions = [
    "My current location",
    "Pick on map",
    "Cancel",
  ];
  const [location, setLocation] = useState();

  async function verifyLocationPermissions() {
    if (locationPermissions.status === PermissionStatus.UNDETERMINED) {
      console.log("Permissions undetermined");
      const permissionsResponse = await setLocationPermissions();
      return permissionsResponse.granted;
    } else if (locationPermissions.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Cannot fetch your location",
        "You didn't granted permissions to your location. Change them if you want to use your current location.",
        [
          { text: "Cancel", style: "destructive" },
          { text: "Change", style: "default" },
        ]
      );
    }
    console.log("Permissions already granted");
    return true;
  }

  async function locationChoiceHandler(index) {
    console.log("Choice with index: " + index);
    if (index === 0) {
      await getCurrentLocationHandler();
    } else {
      pickOnMapHandler();
    }
  }

  async function getCurrentLocationHandler() {
    const hasPermissions = await verifyLocationPermissions();
    if (!hasPermissions) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function pickOnMapHandler() {}

  function showLocationChoiceAlert() {
    actionSheet.current.show();
  }

  function navigateToNextStep() {}

  return (
    <View style={styles.container}>
      <Pressable onPress={showLocationChoiceAlert} style={styles.mapPreview}>
        {location ? (
          <Text>{location}</Text>
        ) : (
          <>
            <MaterialIcons name="add-location-alt" size={50} color="black" />
            <Text style={styles.text}>Tap to choose location</Text>
          </>
        )}
      </Pressable>
      <PrimaryButton
        title="Add"
        onPress={navigateToNextStep}
        disabled={!location}
        style={{ width: "90%", marginHorizontal: 20 }}
      />
      <ActionSheet
        ref={actionSheet}
        title="How would you like to provide the location?"
        options={locationChoiceOptions}
        cancelButtonIndex={2}
        onPress={locationChoiceHandler}
      />
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapPreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1D1D1",
  },
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    padding: 5,
  },
  action: {},
});
