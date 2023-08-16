import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/store";
import { logout, authenticate } from "./store/authenticate";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Header from "./components/UI/Header";
import IconButton from "./components/UI/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
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
        headerLargeTitle: true,
        headerBackground: () => {
          return <Header />;
        },
        headerLargeTitleShadowVisible: true,
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
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
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
