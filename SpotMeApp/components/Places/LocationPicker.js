import { View, Pressable, StyleSheet, Alert, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getMapPreview } from "../../util/location";
import PrimaryButton from "../UI/PrimaryButton";
import ActionSheet from "react-native-actionsheet";

function LocationPicker() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const actionSheet = useRef();
  const [locationPermissions, setLocationPermissions] =
    useForegroundPermissions();
  const locationChoiceOptions = [
    "My current location",
    "Pick on map",
    "Cancel",
  ];
  const [location, setLocation] = useState();
  const pickedImage = route.params.image;

  useEffect(() => {
    if (isFocused && route.params.location) {
      const mapPickedLocation = route.params.location;
      setLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  async function verifyLocationPermissions() {
    if (locationPermissions.status === PermissionStatus.UNDETERMINED) {
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
    return true;
  }

  async function locationChoiceHandler(index) {
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
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  function showLocationChoiceAlert() {
    actionSheet.current.show();
  }

  function navigateToNextStep() {
    navigation.navigate("PlaceTip", {
      image: pickedImage,
      location: location,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={showLocationChoiceAlert} style={styles.mapPreview}>
        {location ? (
          <Image
            //NOTE: If you have Google API Key for Static Map API - uncomment line 95, and delete line 96
            //source={{ uri: getMapPreview(location.lat, location.lng) }}
            source={require("../../assets/images/mapPreview.png")}
            style={styles.image}
          />
        ) : (
          <>
            <MaterialIcons name="add-location-alt" size={50} color="black" />
            <Text style={styles.text}>Tap to choose location</Text>
          </>
        )}
      </Pressable>
      <PrimaryButton
        title="Next"
        onPress={navigateToNextStep}
        disabled={!location}
        style={styles.button}
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
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "90%",
    marginHorizontal: 20,
  },
});
