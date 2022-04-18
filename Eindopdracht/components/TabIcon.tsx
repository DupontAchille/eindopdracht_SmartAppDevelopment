import { Image, View } from "react-native";
import color from "../styling/color";

export default ({ focused, icon }: { focused: any; icon: any }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 50,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? color.darkGreen : color.lightLime,
        }}
      />

      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: color.darkGreen,
          }}
        />
      )}
    </View>
  );
};
