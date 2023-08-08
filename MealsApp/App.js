import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/MealsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./constants/Colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      sceneContainerStyle={{ backgroundColor: Colors.lightBlack }}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerColor,
          elevation: 1,
          shadowOpacity: 0.9,
          shadowRadius: 10,
          shadowColor: "black",
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "clear",
          backgroundColor: Colors.headerColor,
          opacity: 0.95,
          borderTopWidth: 0,
          elevation: 0,
          position: "absolute",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="bookmark"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
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
              name="Tab"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meals"
              component={MealsScreen}
              options={({ route }) => {
                const categoryTitle = route.params.categoryTitle;
                return {
                  title: categoryTitle,
                };
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={({ route }) => {
                const mealTitle = route.params.mealTitle;
                return {
                  title: mealTitle,
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
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
