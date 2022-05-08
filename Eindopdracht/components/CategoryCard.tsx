import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'

export default ({
  categoryItem,
  onPress,
  navigation,
}: {
  categoryItem: any
  onPress?: any
  navigation?: any
}) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const theme = useColorScheme()
  return (
    <TouchableOpacity
      style={[theme === 'dark' ? style.DarkView : style.LightView]}
      onPress={() =>
        navigate('CategoryDetail', { payload: categoryItem.strCategory })
      }
    >
      <Image
        source={{
          uri: `${categoryItem.strCategoryThumb}`,
        }}
        resizeMode="cover"
        style={{
          width: 80,
          height: 80,
          borderRadius: sizes.radius,
        }}
      />
      <View
        style={{
          width: '65%',
          paddingHorizontal: 20,
        }}
      >
        <Text style={[theme === 'dark' ? style.DarkTitle : style.LightTitle]}>
          {categoryItem.strCategory}
        </Text>
        <Text
          numberOfLines={2}
          style={[
            theme === 'dark' ? style.DarkDescription : style.LightDescription,
          ]}
        >
          {categoryItem.strCategoryDescription}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  DarkView: {
    marginHorizontal: sizes.padding,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: sizes.radius,
    backgroundColor: color.transparentGray1,
  },
  LightView: {
    marginHorizontal: sizes.padding,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: sizes.radius,
    backgroundColor: '#F8F8F8',
  },
  DarkTitle: {
    color: '#F8F8F8',
    flex: 1,
    ...fonts.h2,
  },
  LightTitle: {
    color: '#000000',
    flex: 1,
    ...fonts.h2,
  },
  DarkDescription: { color: '#F8F8F8', flex: 1, ...fonts.body4 },
  LightDescription: { color: '#000000', flex: 1, ...fonts.body4 },
})
