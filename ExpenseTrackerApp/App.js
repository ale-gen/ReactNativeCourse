import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="RecentExpenses"
      sceneContainerStyle={{
        backgroundColor: "clear",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0a0e1f",
          elevation: 1,
          shadowOpacity: 1,
          shadowRadius: 10,
          shadowColor: "#0a0e1f",
          borderTopWidth: 0,
          position: "absolute",
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {
                backgroundColor: GlobalStyles.colors.navy,
              },
            }}
          >
            <Stack.Screen
              name="Tab"
              component={TabBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={({ route }) => {
                const expenseName = route.params.title;
                return {
                  title: expenseName,
                  presentation: "modal",
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
