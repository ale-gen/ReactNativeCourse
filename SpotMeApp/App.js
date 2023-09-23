import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { GlobalStyles } from "./constants/styles";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { store } from "./store/store";
import { logout, authenticate } from "./store/authenticate";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import SignUpScreen from "./screens/AuthScreens/SignUpScreen";
import UserPlacesScreen from "./screens/UserPlacesScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import AddPlace from "./components/Places/AddPlace";
import LocalizationPicker from "./components/Places/LocalizationPicker";
import Header from "./components/UI/Header";
import IconButton from "./components/UI/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
SplashScreen.preventAutoHideAsync();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerBackground: () => {
          return <Header />;
        },
        headerTitle: "",
        contentStyle: { backgroundColor: "transparent" },
        animation: "fade",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerLargeTitle: false,
        headerBackground: () => {
          return <Header />;
        },
        headerLargeTitleShadowVisible: true,
        title: "",
      }}
    >
      <Stack.Screen
        name="TopTab"
        component={TopTab}
        options={{
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                name="md-exit-outline"
                color={tintColor}
                size={26}
                onPress={() => {
                  dispatch(logout());
                }}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{
          presentation: "modal",
          headerShown: true,
        }}
      />
      <Stack.Screen name="ChooseLocalization" component={LocalizationPicker} />
    </Stack.Navigator>
  );
}

function TopTab() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Discovery"
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      tabBarPosition="top"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          width: Dimensions.get("window").width * 0.25,
          marginLeft: Dimensions.get("window").width * 0.125,
        },
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.darkPurple,
          shadowColor: GlobalStyles.colors.darkPurple,
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 1,
        },
      }}
    >
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Your places" component={UserPlacesScreen} />
    </Tab.Navigator>
  );
}

function Navigation() {
  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {auth.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isSessionRetrieving, setIsSessionRetrieving] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function retrieveSession() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(authenticate(token));
      }
      setIsSessionRetrieving(false);
      await SplashScreen.hideAsync();
    }
    retrieveSession();
  }, []);

  if (isSessionRetrieving) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
      <StatusBar style="dark" />
    </>
  );
}
