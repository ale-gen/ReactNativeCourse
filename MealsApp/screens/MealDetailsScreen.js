import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { MEALS } from "../data/dummy-data";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
import ImageCard from "../components/ui/ImageCard";
import MealComplexityView from "../components/ui/MealComplexityView";
import IconButton from "../components/ui/IconButton";
import IconLabel from "../components/ui/IconLabel";

function MealDetailsScreen({ route, navigation }) {
  const favMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);
  const isFavourite = favMealIds.includes(route.params.mealId);

  function changeFavouriteStatusHandler() {
    if (isFavourite) {
      dispatch(
        removeFavourite({
          id: meal.id,
        })
      );
    } else {
      dispatch(
        addFavourite({
          id: meal.id,
        })
      );
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName={isFavourite ? "bookmark" : "bookmark-outline"}
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  function renderTitle() {
    return <Text style={styles.title}>{meal.title.toUpperCase()}</Text>;
  }

  function renderMealComplexity() {
    return (
      <MealComplexityView complexity={meal.complexity} iconColor={"yellow"} />
    );
  }

  function renderDietSpecificInfo() {
    return (
      <View style={styles.dietSpecificContainer}>
        <Text style={styles.dietSpecificText}>Diet specification:</Text>
        <View style={styles.dietSpecificIconsContainer}>
          {meal.isVegetarian && !meal.isVegan && (
            <MaterialCommunityIcons name="leaf" size={28} color="green" />
          )}
          {meal.isVegan && (
            <>
              <MaterialCommunityIcons name="leaf" size={28} color="green" />
              <MaterialCommunityIcons name="leaf" size={28} color="green" />
            </>
          )}
          {meal.isLactoseFree && (
            <MaterialCommunityIcons name="cow-off" size={28} color="white" />
          )}
          {meal.isGlutenFree && (
            <MaterialCommunityIcons
              name="bread-slice-outline"
              size={24}
              color="yellow"
            />
          )}
        </View>
      </View>
    );
  }

  function renderIngredients() {
    return (
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        {meal.ingredients.map((ingredient) => (
          <IconLabel
            key={ingredient}
            iconName={"plus-circle-outline"}
            iconColor={"white"}
            textStyle={{ color: "white" }}
          >
            {ingredient.toLowerCase()}
          </IconLabel>
        ))}
      </View>
    );
  }

  function renderSteps() {
    return (
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subtitle}>Steps:</Text>
        {meal.steps.map((step) => (
          <IconLabel
            key={step}
            iconName={"checkbox-blank-circle-outline"}
            iconColor={"white"}
            textStyle={{ color: "white" }}
          >
            {step}
          </IconLabel>
        ))}
      </View>
    );
  }

  function renderBottomView() {
    return (
      <BlurView intensity={70}>
        {renderTitle()}
        {renderMealComplexity()}
        {renderDietSpecificInfo()}
      </BlurView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ImageCard
        imagePath={{ uri: meal.imageUrl }}
        bottomView={renderBottomView()}
        containerStyle={styles.imageContainer}
      />
      {renderIngredients()}
      {renderSteps()}
    </ScrollView>
  );
}

export default MealDetailsScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: deviceHeight * 0.4,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "600",
    textAlign: "left",
    padding: 8,
  },
  dietSpecificContainer: {
    padding: 10,
    marginBottom: 10,
  },
  dietSpecificText: {
    color: "black",
    fontWeight: "bold",
  },
  dietSpecificIconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  ingredientsContainer: {
    margin: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "200",
    color: "white",
    paddingBottom: 5,
  },
});
