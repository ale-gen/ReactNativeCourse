import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Alert } from "react-native";
import { useLayoutEffect, useState, useCallback } from "react";
import { Button } from "@rneui/base";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <Button
          title={"Save"}
          titleStyle={{ color: tintColor }}
          onPress={savePickedLocationHandler}
          color={"transparent"}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  function savePickedLocationHandler() {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick location first! (by tapping on map)"
      );
      return;
    }
    navigation.navigate("ChooseLocation", { location: selectedLocation });
  }

  return (
    <MapView
      initialRegion={region}
      style={styles.container}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
