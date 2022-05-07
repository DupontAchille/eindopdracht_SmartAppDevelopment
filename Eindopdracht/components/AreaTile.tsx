import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import color from '../styling/color'
import fonts from '../styling/fonts'
import sizes from '../styling/sizes'
import images from '../styling/images'
import countries from '../styling/countries'
import { ArrowBigRight } from 'lucide-react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default ({
  containerStyle,
  areaItem,
  onPress,
  navigation,
}: {
  containerStyle?: any
  areaItem: any
  onPress?: any
  navigation?: any
}) => {
  function RenderImage() {
    switch (areaItem.strArea) {
      case 'American':
        return require('../assets/countries/American.png')
      case 'Russian':
        return require('../assets/countries/Russian.png')
      case 'Vietnamese':
        return require('../assets/countries/Vietnamese.png')
      case 'British':
        return require('../assets/countries/British.png')
      case 'Canadian':
        return require('../assets/countries/Canadian.png')
      case 'Chinese':
        return require('../assets/countries/Chinese.png')
      case 'Croatian':
        return require('../assets/countries/Croatian.png')
      case 'Dutch':
        return require('../assets/countries/Dutch.png')
      case 'Egyptian':
        return require('../assets/countries/Egyptian.png')
      case 'French':
        return require('../assets/countries/French.png')
      case 'Greek':
        return require('../assets/countries/Greek.png')
      case 'Indian':
        return require('../assets/countries/Indian.png')
      case 'Irish':
        return require('../assets/countries/Irish.png')
      case 'Italian':
        return require('../assets/countries/Italian.png')
      case 'Jamaican':
        return require('../assets/countries/Jamaican.png')
      case 'Japanese':
        return require('../assets/countries/Japanese.png')
      case 'Kenyan':
        return require('../assets/countries/Kenyan.png')
      case 'Mexican':
        return require('../assets/countries/Mexican.png')
      case 'Moroccan':
        return require('../assets/countries/Moroccan.png')
      case 'Polish':
        return require('../assets/countries/Polish.png')
      case 'Portuguese':
        return require('../assets/countries/Portuguese.png')
      case 'Spanish':
        return require('../assets/countries/Spanish.png')
      case 'Thai':
        return require('../assets/countries/Thai.png')
      case 'Tunisian':
        return require('../assets/countries/Tunisian.png')
      case 'Turkish':
        return require('../assets/countries/Turkish.png')
      case 'Unknown':
        return require('../assets/countries/unknown.png')
      case 'Malaysian':
        return require('../assets/countries/Malaysian.png')
    }
  }
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <TouchableOpacity
      style={{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: sizes.radius,
        backgroundColor: '#F8F8F8',
        ...containerStyle,
        width: 150,
        height: 150,
      }}
      onPress={() =>
        navigate('CountryDetail', {
          payload: areaItem.strArea,
        })
      }
    >
      <Image
        source={RenderImage()}
        resizeMode="cover"
        style={{
          width: 80,
          height: 80,
          borderRadius: sizes.radius,
          alignItems: 'center',
        }}
      />
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            flex: 1,
            ...fonts.h2,
          }}
        >
          {areaItem.strArea}
        </Text>
        <Text
          style={{
            flex: 3.5,
            ...fonts.body5,
          }}
        >
          Discover country
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
