import {
  Dimensions,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'
import { BlurView } from 'expo-blur'

export default ({
  containerStyle,
  InstructionsItem,
  onPress,
}: {
  containerStyle?: any
  InstructionsItem: any
  onPress?: any
}) => {
  return (
    <View style={{ marginBottom: 150 }}>
      <View style={{ left: 32 }}>
        <Text style={{ ...fonts.h2 }}>Instructions</Text>
      </View>
      <View style={{ left: 32, width: '80%' }}>
        <Text style={{ ...fonts.body3, marginTop: 10 }}>
          {InstructionsItem.strInstructions}
        </Text>
      </View>
    </View>
  )
}
