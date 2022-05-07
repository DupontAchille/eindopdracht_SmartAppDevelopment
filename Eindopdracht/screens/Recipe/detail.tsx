import axios, { AxiosResponse } from 'axios'
import { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  StyleSheet,
} from 'react-native'
import meal, { OneMeal } from '../../interfaces/meal'
import fonts from '../../styling/fonts'
import color from '../../styling/color'
import icons from '../../styling/icons'
import IngredientList from '../../components/IngredientList'
import sizes from '../../styling/sizes'

export default function RecipeDetail({ route, navigation }: any) {
  const { payload } = route.params
  const [DataMeal, setData] = useState<OneMeal>()
  useEffect(() => {
    axios
      .get<OneMeal>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${payload}`,
      )
      .then((response: AxiosResponse) => {
        setData(response.data)
      })
  }, [])

  const renderIngredients = ({ item }: { item: meal }) => {
    const i: meal = {
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
    return <IngredientList ingredientItem={i} />
  }

  function renderHeaderBar() {
    return (
      <View style={styles.HeaderStyle}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: color.lightGray,
            backgroundColor: color.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: color.lightGray,
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      <Animated.FlatList
        data={DataMeal?.meals}
        keyExtractor={(item) => `${item.strMeal}`}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderIngredients}
      />
      {renderHeaderBar()}
    </View>
  )
}
const styles = StyleSheet.create({
  HeaderStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    paddingBottom: 10,
  },
})
