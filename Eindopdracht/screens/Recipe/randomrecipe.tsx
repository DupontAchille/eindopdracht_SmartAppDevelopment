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

export default ({ route, navigation }: any) => {
  const [random, setRandomData] = useState<OneMeal>()
  const [Reload, setReload] = useState(false)
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

  useEffect(() => {
    axios
      .get<OneMeal>('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response: AxiosResponse) => {
        setRandomData(response.data)
        console.log(response.data)
      })
  }, [Reload])
  //moet any zijn omdat hij anders niet met de arr.map function wilt werken.
  const renderRandom = ({ item }: { item: any }) => {
    return (
      <View>
        <ScrollView>
          <View style={{ alignItems: 'center', overflow: 'hidden' }}>
            <Animated.Image
              source={{
                uri: `${item.strMealThumb}`,
              }}
              style={{
                height: 350,
                width: '100%',
              }}
            />
            <Animated.View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 30,
                right: 30,
                height: 80,
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderRadius: sizes.radius,
                  backgroundColor: color.transparentBlack7,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={{ flex: 1, marginHorizontal: 20 }}>
                    <Text style={{ color: color.lightGray, ...fonts.body4 }}>
                      Recipe category:
                    </Text>
                    <Text style={{ color: color.white, ...fonts.h3 }}>
                      {item.strCategory}
                    </Text>
                  </View>
                  {item.strSource ? (
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 20,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: color.lightGreen,
                      }}
                      onPress={() => Linking.openURL(`${item.strSource}`)}
                    >
                      <Image
                        source={icons.World}
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: color.lightGreen,
                        }}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </Animated.View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 100,
              width: sizes.width,
              paddingHorizontal: 30,
            }}
          >
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
              <Text style={{ ...fonts.h2 }}>{item.strMeal}</Text>
              {item.strYoutube ? (
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${item.strYoutube}`)}
                >
                  <Text
                    style={{
                      marginTop: 8,
                      color: color.gray,
                      ...fonts.body4,
                    }}
                  >
                    Watch the youtube video here
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </ScrollView>
        <SafeAreaView style={{ marginTop: -20 }}>
          <SafeAreaView style={{ marginLeft: 32, paddingBottom: 5 }}>
            <Text style={{ ...fonts.h2 }}>Ingredient list</Text>
          </SafeAreaView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
            {arr.map((a) =>
              item[`strIngredient${a}`] ? (
                <View style={styles.Row}>
                  <View style={styles.Icon}>
                    <Image
                      source={icons.circle}
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <View style={styles.IngredientAlign}>
                    <Text style={styles.Text}>{item[`strIngredient${a}`]}</Text>
                  </View>
                  <View style={styles.MeasureAlign}>
                    <Text style={styles.Text}>{item[`strMeasure${a}`]}</Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        </SafeAreaView>
        <View style={{ marginBottom: 150 }}>
          <View style={{ left: 32 }}>
            <Text style={{ ...fonts.h2 }}>Instructions</Text>
          </View>
          <View style={{ left: 32, width: '80%' }}>
            <Text style={{ ...fonts.body3, marginTop: 10 }}>
              {item.strInstructions}
            </Text>
          </View>
        </View>
      </View>
    )
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
        renderItem={renderRandom}
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
