import { View, Pressable, Text, Alert, Image, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "../UI/PrimaryButton";

function ImagePicker() {
  const navigation = useNavigation();
  const [cameraPermissions, setCameraPermissions] = useCameraPermissions();
  const [image, setImage] = useState();

  async function verifyCameraPermissions() {
    if (cameraPermissions.status === PermissionStatus.UNDETERMINED) {
      const permissionsResponse = await setCameraPermissions();
      return permissionsResponse.granted;
    } else if (cameraPermissions.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Cannot use camera",
        "You didn't granted permissions to your camera. Change them if you want to take a photo.",
        [
          { text: "Cancel", style: "destructive" },
          { text: "Change", style: "default" },
        ]
      );
    } else {
      return true;
    }
  }

  async function takePhotoHandler() {
    const hasPermissions = verifyCameraPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.uri);
  }

  function navigateToNextStep() {
    navigation.navigate("ChooseLocation", { image: image });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={takePhotoHandler} style={styles.imagePreview}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <>
            <MaterialIcons name="add-photo-alternate" size={50} color="black" />
            <Text style={styles.text}>Tap to add photo</Text>
          </>
        )}
      </Pressable>
      <PrimaryButton
        title="Next"
        onPress={navigateToNextStep}
        disabled={!image}
        style={{ width: "90%", marginHorizontal: 20 }}
      />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1D1D1",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    padding: 5,
  },
});
