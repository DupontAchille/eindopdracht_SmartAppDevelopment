import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import color from '../../styling/color'
import { OneCategorie, OneCategorieDetail } from '../../interfaces/category'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryMealList from '../../components/CategoryMealList'
import { StatusBar } from 'expo-status-bar'

export default function CountryDetail({ route, navigation }: any) {
  const { payload } = route.params

  const [onecategory, setOneCategoryData] = useState<OneCategorie>()
  useEffect(() => {
    axios
      .get<OneCategorie>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${payload}`,
      )
      .then((response: AxiosResponse) => {
        setOneCategoryData(response.data)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const renderCategoryMeals = ({ item }: { item: OneCategorieDetail }) => {
    const c: OneCategorieDetail = {
      idMeal: item.idMeal,
      strMeal: item.strMeal,
      strMealThumb: item.strMealThumb,
    }
    return (
      <CategoryMealList
        categoryMealItem={c}
        containerStyle={{
          flex: 1,
        }}
      />
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.white,
        alignItems: 'center',
        marginTop: -20,
      }}
    >
      <StatusBar style="dark" />
      <FlatList
        data={onecategory?.meals}
        keyExtractor={(item) => `${item.idMeal}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryMeals}
        ListFooterComponent={<View style={{ marginBottom: 50 }}></View>}
      />
    </SafeAreaView>
  )
}
