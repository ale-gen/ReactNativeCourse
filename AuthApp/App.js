import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./store/store";
import { logout } from "./store/authenticate";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Header from "./components/UI/Header";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

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

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
      <StatusBar style="dark" />
    </>
  );
}
