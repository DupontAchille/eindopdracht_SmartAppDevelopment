import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'
import MealCard from '../../components/CategoryCard'
import RecentCard from '../../components/RecentCard'
import category, { categories } from '../../interfaces/category'
import meal from '../../interfaces/meal'
import color from '../../styling/color'
import fonts from '../../styling/fonts'
import sizes from '../../styling/sizes'
import icons from '../../styling/icons'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'
import LottieView from 'lottie-react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native-appearance'

export default function () {
  const scheme = useColorScheme()
  const testmeals: meal[] = [
    {
      idMeal: '52940',
      strMeal: 'Brown Stew Chicken',
      strDrinkAlternate: null,
      strCategory: 'Chicken',
      strArea: 'Jamaican',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
      strTags: 'Stew',
      strYoutube: 'https://www.youtube.com/watch?v=_gFB1fkNhXs',
    },
    {
      idMeal: '52876',
      strMeal: 'Minced Beef Pie',
      strDrinkAlternate: null,
      strCategory: 'Beef',
      strArea: 'British',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg',
      strTags: 'Pie,Meat',
      strYoutube: 'https://www.youtube.com/watch?v=QY47h-uqq5g',
    },
    {
      idMeal: '52967',
      strMeal: 'Home-made Mandazi',
      strDrinkAlternate: null,
      strCategory: 'Breakfast',
      strArea: 'Kenyan',
      strTags: 'Baking,Breakfast,Egg,Warm,Snack',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg',
      strYoutube: '',
    },
  ]
  const [category, setCategoryData] = useState<categories>()

  useEffect(() => {
    axios
      .get<categories>('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response: AxiosResponse) => {
        setCategoryData(response.data)
      })
  }, [])

  const renderCategory = ({ item }: { item: category }) => {
    const c: category = {
      idCategory: item.idCategory,
      strCategory: item.strCategory,
      strCategoryThumb: item.strCategoryThumb,
      strCategoryDescription: item.strCategoryDescription,
    }
    return <MealCard categoryItem={c} />
  }

  const renderRecentMeal = ({ item }: { item: meal }) => {
    const m: meal = {
      idMeal: item.idMeal,
      strMeal: item.strMeal,
      strDrinkAlternate: item.strDrinkAlternate,
      strCategory: item.strCategory,
      strArea: item.strArea,
      strInstructions: item.strInstructions,
      strMealThumb: item.strMealThumb,
      strTags: item.strTags,
      strYoutube: item.strYoutube,
      strIngredient1: item.strIngredient1,
      strIngredient2: item.strIngredient2,
      strIngredient3: item.strIngredient3,
      strIngredient4: item.strIngredient4,
      strIngredient5: item.strIngredient5,
      strIngredient6: item.strIngredient6,
      strIngredient7: item.strIngredient7,
      strIngredient8: item.strIngredient8,
      strIngredient9: item.strIngredient9,
      strIngredient10: item.strIngredient10,
      strIngredient11: item.strIngredient11,
      strIngredient12: item.strIngredient12,
      strIngredient13: item.strIngredient13,
      strIngredient14: item.strIngredient14,
      strIngredient15: item.strIngredient15,
      strIngredient16: item.strIngredient16,
      strIngredient17: item.strIngredient17,
      strIngredient18: item.strIngredient18,
      strIngredient19: item.strIngredient19,
      strIngredient20: item.strIngredient20,
      strMeasure1: item.strMeasure1,
      strMeasure2: item.strMeasure2,
      strMeasure3: item.strMeasure3,
      strMeasure4: item.strMeasure4,
      strMeasure5: item.strMeasure5,
      strMeasure6: item.strMeasure6,
      strMeasure7: item.strMeasure7,
      strMeasure8: item.strMeasure8,
      strMeasure9: item.strMeasure9,
      strMeasure10: item.strMeasure10,
      strMeasure11: item.strMeasure11,
      strMeasure12: item.strMeasure12,
      strMeasure13: item.strMeasure13,
      strMeasure14: item.strMeasure14,
      strMeasure15: item.strMeasure15,
      strMeasure16: item.strMeasure16,
      strMeasure17: item.strMeasure17,
      strMeasure18: item.strMeasure18,
      strMeasure19: item.strMeasure19,
      strMeasure20: item.strMeasure20,
      strSource: item.strSource,
      strImageSource: item.strImageSource,
      strCreativeCommonsConfirmed: item.strCreativeCommonsConfirmed,
      dateModified: item.dateModified,
    }
    return (
      <RecentCard
        mealItem={m}
        containerStyle={{ marginHorizontal: sizes.padding }}
      />
    )
  }

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: sizes.padding,
          alignItems: 'center',
          height: 80,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: color.darkGreen, ...fonts.h2 }}>
            Hello Chef
          </Text>
          <Text
            style={[
              scheme === 'dark'
                ? style.DarkHeaderTitle
                : style.LightHeaderTitle,
            ]}
          >
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.avatar}
            style={{ width: 60, height: 60, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  function renderRecent() {
    return (
      <View style={{ marginTop: sizes.padding }}>
        <View style={{ marginLeft: 24 }}>
          <Text
            style={[scheme === 'dark' ? style.DarkTitle : style.LightTitle]}
          >
            Recently added
          </Text>
        </View>
        <FlatList
          data={testmeals}
          keyExtractor={(item) => `${item.idMeal}`}
          horizontal
          showsVerticalScrollIndicator={false}
          renderItem={renderRecentMeal}
        ></FlatList>
      </View>
    )
  }

  function renderRandomRecipeCard() {
    const lottieRef = useRef<LottieView>(null)
    const { navigate } =
      useNavigation<NativeStackNavigationProp<ParamListBase>>()
    useEffect(() => {
      if (lottieRef && lottieRef.current) {
        lottieRef.current.play()
      }
    })
    return (
      <View style={[scheme === 'dark' ? style.DarkHeader : style.LightHeader]}>
        <View
          style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}
        >
          <LottieView
            source={require('../../assets/lottiefiles/4762-food-carousel.json')}
            ref={lottieRef}
            style={{ width: 75, height: 75 }}
          />
        </View>
        <View style={{ flex: 1, paddingVertical: sizes.radius }}>
          <Text
            style={[
              scheme === 'dark'
                ? style.DarkRandomTitle
                : style.LightRandomTitle,
            ]}
          >
            Want to try out something new & random?
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigate('Randomizer')}
          >
            <Text
              style={{
                color: color.darkGreen,
                textDecorationLine: 'underline',
                ...fonts.h4,
              }}
            >
              Random Recipe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: sizes.padding,
        }}
      >
        <Text style={[scheme === 'dark' ? style.DarkTitle : style.LightTitle]}>
          Categories
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={category?.categories}
        keyExtractor={(item) => `${item.idCategory}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderRandomRecipeCard()}
            {renderRecent()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={renderCategory}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  DarkTitle: { flex: 1, ...fonts.h2, color: color.white },
  LightTitle: { flex: 1, ...fonts.h2, color: color.black },
  DarkHeader: {
    flexDirection: 'row',
    marginTop: sizes.padding,
    marginHorizontal: sizes.padding,
    borderRadius: 10,
    backgroundColor: color.transparentGray1,
  },
  LightHeader: {
    flexDirection: 'row',
    marginTop: sizes.padding,
    marginHorizontal: sizes.padding,
    borderRadius: 10,
    backgroundColor: color.lightGreen,
  },
  DarkRandomTitle: { width: '80%', ...fonts.body4, color: color.white },
  LightRandomTitle: { width: '80%', ...fonts.body4, color: color.black },
  DarkHeaderTitle: { marginTop: 3, color: color.white, ...fonts.body3 },
  LightHeaderTitle: { marginTop: 3, color: color.gray, ...fonts.body3 },
})
