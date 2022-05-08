import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Recipe from './screens/Recipe'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './screens/AppNavigation'
import categoryDetail from './screens/Recipe/categorydetail'
import RecipeDetail from './screens/Recipe/detail'
import CountryDetail from './screens/Recipe/countrydetail'
import Login from './screens/Login'
import randomrecipe from './screens/Recipe/randomrecipe'
import { useColorScheme } from 'react-native-appearance'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
  const scheme = useColorScheme()
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Login'}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
          <Stack.Screen
            name="CategoryDetail"
            component={categoryDetail}
            options={{ headerShown: true, title: `Detail` }}
          />
          <Stack.Screen
            name="CountryDetail"
            component={CountryDetail}
            options={{ headerShown: true, title: `Detail` }}
          />
          <Stack.Screen name="Detail" component={RecipeDetail} />
          <Stack.Screen name="Random" component={randomrecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
