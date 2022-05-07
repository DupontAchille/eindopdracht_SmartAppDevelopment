import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import axios, { AxiosResponse } from 'axios'
import AreaTile from '../../components/AreaTile'
import sizes from '../../styling/sizes'
import Area, { AreaString } from '../../interfaces/area'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RecipeList() {
  const [area, setData] = useState<Area>()

  useEffect(() => {
    axios
      .get<Area>('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response: AxiosResponse) => {
        setData(response.data)
        console.log(response.data)
      })
  }, [])

  const renderArea = ({ item }: { item: AreaString }) => {
    const a: AreaString = {
      strArea: item.strArea,
    }
    return <AreaTile areaItem={a} containerStyle={{ marginHorizontal: 15 }} />
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', marginBottom: 100 }}>
      <FlatList
        data={area?.meals}
        keyExtractor={(item) => `${item.strArea}`}
        renderItem={renderArea}
        numColumns={2}
      />
    </SafeAreaView>
  )
}
