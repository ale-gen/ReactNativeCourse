import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";
import Header from "./components/ui/Header";
import IconButton from "./components/ui/IconButton";

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
        header: ({ route, navigation, options }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <Header
              title={title}
              rightButton={
                <IconButton
                  name={"plus"}
                  onPress={() => {
                    navigation.navigate("ManageExpense", {
                      title: "Create expense",
                    });
                  }}
                />
              }
            />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All expenses",
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
      <StatusBar style="light" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tab"
              component={TabBar}
              options={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: GlobalStyles.colors.navy,
                },
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={({ route }) => {
                const headerTitle = route.params.title;
                return {
                  title: headerTitle,
                  presentation: "modal",
                  headerStyle: {
                    backgroundColor: GlobalStyles.colors.lightBlue,
                  },
                  headerLargeTitle: true,
                  headerLargeTitleShadowVisible: true,
                  contentStyle: {
                    backgroundColor: GlobalStyles.colors.lightBlue,
                  },
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
