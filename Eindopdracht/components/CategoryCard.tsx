import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Globe } from "lucide-react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import color from "../styling/color";
import fonts from "../styling/fonts";
import sizes from "../styling/sizes";

export default ({
  containerStyle,
  categoryItem,
  onPress,
  navigation,
}: {
  containerStyle?: any;
  categoryItem: any;
  onPress?: any;
  navigation?: any;
}) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: sizes.radius,
        backgroundColor: "#F8F8F8",
        ...containerStyle,
      }}
      onPress={() =>
        navigate("CategoryDetail", { payload: categoryItem.strCategory })
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
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...fonts.h2,
          }}
        >
          {categoryItem.strCategory}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            flex: 1,
            ...fonts.body4,
          }}
        >
          {categoryItem.strCategoryDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
