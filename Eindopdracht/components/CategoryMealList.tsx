import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'

export default ({
  categoryMealItem,
  onPress,
}: {
  containerStyle?: any
  categoryMealItem: any
  onPress?: any
}) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const theme = useColorScheme()
  return (
    <TouchableOpacity
      style={[theme === 'dark' ? style.DarkView : style.LightView]}
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
        <Text style={[theme === 'dark' ? style.DarkTitle : style.LightTitle]}>
          {categoryMealItem.strMeal}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  DarkView: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: sizes.radius,
    backgroundColor: color.transparentGray1,
  },
  LightView: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: sizes.radius,
    backgroundColor: '#F8F8F8',
  },
  DarkTitle: {
    flex: 1,
    ...fonts.h2,
    color: color.white,
  },
  LightTitle: {
    flex: 1,
    ...fonts.h2,
    color: color.black,
  },
})
