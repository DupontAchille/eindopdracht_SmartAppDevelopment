import { Underline } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useColorScheme,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from '../styling/color'
import fonts from '../styling/fonts'
import icons from '../styling/icons'
import sizes from '../styling/sizes'
import entering from 'react-native-reanimated'

export default ({
  containerStyle,
  ingredientItem,
  onPress,
}: {
  containerStyle?: any
  ingredientItem: any
  onPress?: any
}) => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]
  const theme = useColorScheme()
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])
  return (
    <View>
      <ScrollView key={ingredientItem.idMeal}>
        <View style={{ alignItems: 'center', overflow: 'hidden' }}>
          <Animated.Image
            source={{
              uri: `${ingredientItem.strMealThumb}`,
            }}
            style={[styles.ThumbImg, { opacity: fadeAnim }]}
          />
          <Animated.View style={[styles.ImgCaption, { opacity: fadeAnim }]}>
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
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 30 }}
          >
            <Text
              style={[theme === 'dark' ? styles.DarkTitle : styles.LightTitle]}
            >
              {ingredientItem.strMeal}
            </Text>
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
      <View style={{ paddingHorizontal: 30 }}>
        <View>
          <Text
            style={[theme === 'dark' ? styles.DarkTitle : styles.LightTitle]}
          >
            Ingredient list
          </Text>
          <View
            style={{
              flex: 1,
              marginBottom: 10,
            }}
          >
            {arr.map((a) =>
              ingredientItem[`strIngredient${a}`] ? (
                <View key={a} style={styles.Row}>
                  <View style={styles.Icon}>
                    <Image
                      source={icons.circle}
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <View style={styles.IngredientAlign}>
                    <Text
                      style={[
                        theme === 'dark' ? styles.DarkText : styles.LightText,
                      ]}
                    >
                      {ingredientItem[`strIngredient${a}`]}
                    </Text>
                  </View>
                  <View style={styles.MeasureAlign}>
                    <Text
                      style={[
                        theme === 'dark' ? styles.DarkText : styles.LightText,
                      ]}
                    >
                      {ingredientItem[`strMeasure${a}`]}
                    </Text>
                  </View>
                </View>
              ) : null,
            )}
          </View>
        </View>
        <View style={{ marginBottom: 130 }}>
          <Text
            style={[theme === 'dark' ? styles.DarkTitle : styles.LightTitle]}
          >
            Instructions
          </Text>
          <View style={{ width: '90%' }}>
            <Text
              style={[
                theme === 'dark'
                  ? styles.DarkIngredients
                  : styles.LightIngredients,
              ]}
            >
              {ingredientItem.strInstructions}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    width: '100%',
  },
  Icon: {
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  IngredientAlign: {
    paddingRight: 5,
    justifyContent: 'center',
  },
  MeasureAlign: {
    textAlign: 'right',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  DarkText: {
    ...fonts.body3,
    color: color.white,
  },
  LightText: { ...fonts.body5, color: color.black },
  DarkTitle: { ...fonts.h2, color: color.white },
  LightTitle: { ...fonts.h2, color: color.black },
  DarkIngredients: { ...fonts.body3, marginTop: 10, color: color.white },
  LightIngredients: { ...fonts.body3, marginTop: 10, color: color.black },
  ThumbImg: {
    height: 350,
    width: '100%',
  },
  ImgCaption: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
    height: 80,
    flex: 1,
  },
})
