import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./constants/Colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.headerColor,
              elevation: 1,
              shadowOpacity: 0.9,
              shadowRadius: 10,
              shadowColor: "black",
            },
            headerTintColor: "white",
            cardStyle: { backgroundColor: Colors.lightBlack },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            options={({ route, navigation }) => {
              const categoryTitle = route.params.categoryTitle;
              return {
                title: categoryTitle,
              };
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ route, navigation }) => {
              const mealTitle = route.params.mealTitle;
              return {
                title: mealTitle,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
