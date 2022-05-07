import React, { useRef } from 'react'
import {
  Animated,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from '../styling/color'
import fonts from '../styling/fonts'
import icons from '../styling/icons'
import sizes from '../styling/sizes'

export default ({
  containerStyle,
  ingredientItem,
  onPress,
}: {
  containerStyle?: any
  ingredientItem: any
  onPress?: any
}) => {
  const scrollY = useRef(new Animated.Value(0)).current
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]
  return (
    <View>
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        <View style={{ alignItems: 'center', overflow: 'hidden' }}>
          <Animated.Image
            source={{
              uri: `${ingredientItem.strMealThumb}`,
            }}
            style={{
              height: 350,
              width: '100%',
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-350, 0, 350],
                    outputRange: [-350 / 2, 0, 350 * 0.75],
                  }),
                },
                {
                  scale: scrollY.interpolate({
                    inputRange: [-350, 0, 350],
                    outputRange: [2, 1, 0.75],
                  }),
                },
              ],
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
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, 170, 250],
                    outputRange: [0, 0, 100],
                    extrapolate: 'clamp',
                  }),
                },
              ],
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
                    {ingredientItem.strCategory}
                  </Text>
                </View>
                {ingredientItem.strSource ? (
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
                    onPress={() =>
                      Linking.openURL(`${ingredientItem.strSource}`)
                    }
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
            <Text style={{ ...fonts.h2 }}>{ingredientItem.strMeal}</Text>
            {ingredientItem.strYoutube ? (
              <TouchableOpacity
                onPress={() => Linking.openURL(`${ingredientItem.strYoutube}`)}
              >
                <Text
                  style={{
                    marginTop: 5,
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
      <SafeAreaView style={{ marginTop: -40 }}>
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
            ingredientItem[`strIngredient${a}`] ? (
              <View
                style={styles.Row}
                key={ingredientItem[`strIngredient${a}`]}
              >
                <View style={styles.Icon}>
                  <Image
                    source={icons.circle}
                    style={{ width: 8, height: 8 }}
                  />
                </View>
                <View style={styles.IngredientAlign}>
                  <Text style={styles.Text}>
                    {ingredientItem[`strIngredient${a}`]}
                  </Text>
                </View>
                <View style={styles.MeasureAlign}>
                  <Text style={styles.Text}>
                    {ingredientItem[`strMeasure${a}`]}
                  </Text>
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
            {ingredientItem.strInstructions}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    marginVertical: 5,
    width: '50%',
    left: 20,
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
})
