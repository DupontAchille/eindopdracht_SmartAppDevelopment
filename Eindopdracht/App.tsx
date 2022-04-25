import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Recipe from "./screens/Recipe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./screens/AppNavigation";
import categoryDetail from "./screens/Recipe/categorydetail";
import RecipeDetail from "./screens/Recipe/detail";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Login"}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen
            name="CategoryDetail"
            component={categoryDetail}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Detail" component={RecipeDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
