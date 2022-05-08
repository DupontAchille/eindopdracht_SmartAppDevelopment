import { Image, Text, TouchableOpacity, View } from 'react-native'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'
import { BlurView } from 'expo-blur'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default ({
  containerStyle,
  mealItem,
  onPress,
}: {
  containerStyle?: any
  mealItem: any
  onPress?: any
}) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: sizes.radius,
        marginRight: 20,
        ...containerStyle,
      }}
      onPress={() =>
        navigate('Detail', {
          payload: mealItem.idMeal,
        })
      }
    >
      <Image
        source={{
          uri: `${mealItem.strMealThumb}`,
        }}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          borderRadius: sizes.radius,
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: sizes.radius,
          paddingVertical: 5,
          backgroundColor: color.transparentGray,
        }}
      >
        <Text style={{ color: color.white, ...fonts.h4 }}>
          {mealItem.strCategory}
        </Text>
      </View>
      <BlurView
        intensity={70}
        tint="dark"
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          height: 100,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: color.white,
                ...fonts.h3,
                fontSize: 22,
                left: 10,
                top: 10,
              }}
            >
              {mealItem.strMeal}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: color.white,
                ...fonts.h3,
                fontSize: 16,
                left: 10,
                top: 10,
              }}
            >
              Country:
              {mealItem.strArea}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: color.white,
                ...fonts.h3,
                fontSize: 16,
                left: 10,
              }}
            >
              Category:
              {mealItem.strCategory}
            </Text>
          </View>
        </View>
      </BlurView>
    </TouchableOpacity>
  )
}
