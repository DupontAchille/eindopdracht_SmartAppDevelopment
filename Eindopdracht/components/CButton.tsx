import { TouchableOpacity, Text } from "react-native";
import color from "../styling/color";
import fonts from "../styling/fonts";
import sizes from "../styling/sizes";
import images from "../styling/images";

import { LinearGradient } from "expo-linear-gradient";

export default ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
}: {
  buttonText: any;
  buttonContainerStyle: any;
  colors: any;
  onPress: any;
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          start={[0, 0.8]}
          style={{ ...buttonContainerStyle }}
        >
          <Text
            style={{ textAlign: "center", color: color.white, ...fonts.h3 }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...buttonContainerStyle }} onPress={onPress}>
        <Text style={{ textAlign: "center", color: color.white, ...fonts.h3 }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
