import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import ImageCard from "../ui/ImageCard";
import { BlurView } from "expo-blur";
import MealComplexityView from "../ui/MealComplexityView";
import DurationView from "../ui/DurationView";
import { useNavigation } from "@react-navigation/native";

function MealItem({ id, title, imageUrl, duration, complexity }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  function renderAdditionalInfo() {
    return (
      <BlurView intensity={50} style={styles.additionalInfoContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <MealComplexityView complexity={complexity} />
      </BlurView>
    );
  }

  function renderDuration() {
    return <DurationView duration={duration} />;
  }

  function pressHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
      mealTitle: title,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}
      >
        <View>
          <ImageCard
            imagePath={{ uri: imageUrl }}
            bottomView={renderAdditionalInfo()}
            rightTopCornerView={renderDuration()}
            containerStyle={{ width: width * 0.7, height: height / 2.5 }}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  additionalInfoContainer: {
    width: "100%",
    paddingBottom: 20,
  },
  title: {
    color: "white",
    fontWeight: "600",
    textAlign: "left",
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
