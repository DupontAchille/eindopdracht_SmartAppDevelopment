import { View, StatusBar, ImageBackground, Text } from "react-native";

import color from "../../styling/color";
import fonts from "../../styling/fonts";
import sizes from "../../styling/sizes";
import images from "../../styling/images";

import { LinearGradient } from "expo-linear-gradient";
import CButton from "../../components/CButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

function renderHeader() {
  return (
    <View
      style={{
        height: sizes.height > 700 ? "65%" : "60%",
      }}
    >
      <ImageBackground
        source={images.loginBackground}
        style={{ flex: 1, width: "100%", alignItems: "center" }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[color.transparent, color.black]}
          start={[0.5, 0.6]}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.95,
            justifyContent: "flex-end",
            paddingHorizontal: sizes.padding,
          }}
        >
          <Text
            style={{
              width: "80%",
              color: color.white,
              ...fonts.largeTitle,
              lineHeight: 45,
            }}
          >
            Recipe app for delicious food
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function renderDetail() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, paddingHorizontal: sizes.padding }}>
      <Text
        style={{
          marginTop: sizes.radius,
          width: "70%",
          color: color.gray,
          ...fonts.body3,
        }}
      >
        Discover new and delicious recipes in your hand and start cooking!
      </Text>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <CButton
          buttonText="Discover More"
          colors={[color.darkGreen, color.lime]}
          onPress={() => navigate("Main")}
          buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20 }}
        />
      </View>
    </View>
  );
}

export default () => {
  return (
    <View style={{ flex: 1, backgroundColor: color.black }}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderDetail()}
    </View>
  );
};
