import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import Recipe from "../screens/Recipe";
import color from "../styling/color";
import fonts from "../styling/fonts";
import sizes from "../styling/sizes";
import { BlurView } from "expo-blur";
import icons from "../styling/icons";

export default ({
  containerStyle,
  mealItem,
  onPress,
}: {
  containerStyle?: any;
  mealItem: any;
  onPress?: any;
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: sizes.radius,
        marginRight: 20,
        borderRadius: sizes.radius,
        ...containerStyle,
      }}
      onPress={onPress}
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
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: sizes.radius,
          paddingVertical: 5,
          backgroundColor: color.transparentGray,
          borderRadius: sizes.radius,
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
          position: "absolute",
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
              flexDirection: "row",
              justifyContent: "space-between",
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
              flexDirection: "row",
              justifyContent: "space-between",
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
              flexDirection: "row",
              justifyContent: "space-between",
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
  );
};
