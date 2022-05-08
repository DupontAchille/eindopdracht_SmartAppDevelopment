import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import meal, { OneMeal } from '../../interfaces/meal'
import color from '../../styling/color'
import fonts from '../../styling/fonts'
import icons from '../../styling/icons'
import sizes from '../../styling/sizes'
import Ripple from 'react-native-material-ripple'
import IngredientList from '../../components/DetailList'

export default ({ route, navigation }: any) => {
  const [random, setRandomData] = useState<OneMeal>()
  const [Reload, setReload] = useState(false)

  useEffect(() => {
    axios
      .get<OneMeal>('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response: AxiosResponse) => {
        setRandomData(response.data)
      })
  }, [Reload])

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
      <View style={styles.HeaderView}>
        <Ripple
          style={styles.RippleStyle}
          rippleColor={color.darkGreen}
          rippleOpacity={0.9}
          rippleDuration={2000}
          rippleSize={1000}
          rippleCentered={true}
          onPress={() => setReload(!Reload)}
        >
          <Text style={{ color: '#fff', fontSize: 12 }}>Random</Text>
        </Ripple>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={random?.meals}
        keyExtractor={(item) => `${item.idMeal}`}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={renderIngredients}
      />
      {renderHeaderBar()}
    </View>
  )
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    marginVertical: 5,
    width: '50%',
    left: 10,
  },
  Icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  IngredientAlign: {
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  MeasureAlign: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Text: {
    ...fonts.body5,
  },
  HeaderView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.padding,
    paddingBottom: 10,
  },
  RippleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: color.lightGray,
    backgroundColor: color.transparentBlack9,
  },
})
