import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'

export default ({
  containerStyle,
  categoryMealItem,
  onPress,
}: {
  containerStyle?: any
  categoryMealItem: any
  onPress?: any
}) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        borderRadius: sizes.radius,
        backgroundColor: '#F8F8F8',
        ...containerStyle,
      }}
      onPress={() => navigate('Detail', { payload: categoryMealItem.idMeal })}
    >
      <Image
        source={{
          uri: `${categoryMealItem.strMealThumb}`,
        }}
        resizeMode="cover"
        style={{
          width: 350,
          height: 200,
          borderRadius: sizes.radius,
        }}
      />
      <View
        style={{
          paddingTop: 10,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            flex: 1,
            ...fonts.h2,
          }}
        >
          {categoryMealItem.strMeal}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
