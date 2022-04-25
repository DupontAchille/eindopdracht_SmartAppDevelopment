import axios, { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import meal, { OneMeal } from "../../interfaces/meal";
import fonts from "../../styling/fonts";
import color from "../../styling/color";
import icons from "../../styling/icons";
import IngredientList from "../../components/IngredientList";
import sizes from "../../styling/sizes";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function RecipeDetail({ item }: { item: meal }) {
  const [OneMeal, setData] = useState<OneMeal>();

  useEffect(() => {
    axios
      .get<OneMeal>(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Walnut Roll Gužvara"
      )
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);

  const scrollY = useRef(new Animated.Value(0)).current;
  const InstructionString =
    "Mix all the ingredients for the dough together and knead well. Cover the dough and put to rise until doubled in size which should take about 2 hours. Knock back the dough and knead lightly.\r\n\r\nDivide the dough into two equal pieces; roll each piece into an oblong about 12 inches by 8 inches. Mix the filling ingredients together and divide between the dough, spreading over each piece. Roll up the oblongs as tightly as possible to give two 12 inch sausages. Place these side by side, touching each other, on a greased baking sheet. Cover and leave to rise for about 40 minutes. Heat oven to 200ºC (425ºF). Bake for 30-35 minutes until well risen and golden brown. Bread should sound hollow when the base is tapped.\r\n\r\nRemove from oven and brush the hot bread top with milk. Sift with a generous covering of icing sugar.";

  const renderIngredients = ({ item }: { item: meal }) => {
    const i: meal = {
      idMeal: item.idMeal,
      strMeal: item.strMeal,
      strDrinkAlternate: item.strDrinkAlternate,
      strCategory: item.strCategory,
      strArea: item.strArea,
      strInstructions: item.strInstructions,
      strMealThumb: item.strMealThumb,
      strTags: item.strTags,
      strYoutube: item.strYoutube,
      strIngredient1: item.strIngredient1,
      strIngredient2: item.strIngredient2,
      strIngredient3: item.strIngredient3,
      strIngredient4: item.strIngredient4,
      strIngredient5: item.strIngredient5,
      strIngredient6: item.strIngredient6,
      strIngredient7: item.strIngredient7,
      strIngredient8: item.strIngredient8,
      strIngredient9: item.strIngredient9,
      strIngredient10: item.strIngredient10,
      strIngredient11: item.strIngredient11,
      strIngredient12: item.strIngredient12,
      strIngredient13: item.strIngredient13,
      strIngredient14: item.strIngredient14,
      strIngredient15: item.strIngredient15,
      strIngredient16: item.strIngredient16,
      strIngredient17: item.strIngredient17,
      strIngredient18: item.strIngredient18,
      strIngredient19: item.strIngredient19,
      strIngredient20: item.strIngredient20,
      strMeasure1: item.strMeasure1,
      strMeasure2: item.strMeasure2,
      strMeasure3: item.strMeasure3,
      strMeasure4: item.strMeasure4,
      strMeasure5: item.strMeasure5,
      strMeasure6: item.strMeasure6,
      strMeasure7: item.strMeasure7,
      strMeasure8: item.strMeasure8,
      strMeasure9: item.strMeasure9,
      strMeasure10: item.strMeasure10,
      strMeasure11: item.strMeasure11,
      strMeasure12: item.strMeasure12,
      strMeasure13: item.strMeasure13,
      strMeasure14: item.strMeasure14,
      strMeasure15: item.strMeasure15,
      strMeasure16: item.strMeasure16,
      strMeasure17: item.strMeasure17,
      strMeasure18: item.strMeasure18,
      strMeasure19: item.strMeasure19,
      strMeasure20: item.strMeasure20,
      strSource: item.strSource,
      strImageSource: item.strImageSource,
      strCreativeCommonsConfirmed: item.strCreativeCommonsConfirmed,
      dateModified: item.dateModified,
    };
    return <IngredientList ingredientItem={i} />;
  };

  function renderHeaderBar() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: sizes.padding,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: color.lightGray,
            backgroundColor: color.transparentBlack5,
          }}
          // onPress={() => }
        >
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: color.lightGray,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function RenderInstructions() {
    return (
      <View style={{ marginBottom: 150 }}>
        <View style={{ left: 32 }}>
          <Text style={{ ...fonts.h2 }}>Instructions</Text>
        </View>
        <View style={{ left: 32, width: "80%" }}>
          <Text style={{ ...fonts.body3, marginTop: 10 }}>
            {InstructionString}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Animated.FlatList
        data={OneMeal?.meals}
        keyExtractor={(item) => `${item.strMeal}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={(item: meal) => (
          <View>
            <View style={{ alignItems: "center", overflow: "hidden" }}>
              {console.log(item.strMealThumb)}
              <Animated.Image
                source={{
                  uri: `https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg`,
                }}
                style={{
                  height: 350,
                  width: "100%",
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [-350, 0, 350],
                        outputRange: [-350 / 2, 0, 350 * 0.75],
                      }),
                    },
                    {
                      scale: scrollY.interpolate({
                        inputRange: [-350, 0, 350],
                        outputRange: [2, 1, 0.75],
                      }),
                    },
                  ],
                }}
              />
              <Animated.View
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 30,
                  right: 30,
                  height: 80,
                  flex: 1,
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [0, 170, 250],
                        outputRange: [0, 0, 100],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              >
                <View
                  style={{
                    flex: 1,
                    borderRadius: sizes.radius,
                    backgroundColor: color.transparentBlack7,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, marginHorizontal: 20 }}>
                      <Text style={{ color: color.lightGray, ...fonts.body4 }}>
                        Recipe category:
                      </Text>
                      <Text style={{ color: color.white, ...fonts.h3 }}>
                        Da trekt ier op niets{item.strCategory}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 20,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: color.lightGreen,
                      }}
                      onPress={() =>
                        Linking.openURL(
                          "https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/"
                        )
                      }
                    >
                      <Image
                        source={icons.World}
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: color.lightGreen,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 100,
                width: sizes.width,
                paddingHorizontal: 30,
              }}
            >
              <View style={{ flex: 1.5, justifyContent: "center" }}>
                <Text style={{ ...fonts.h2 }}>Walnut Roll Gužvara</Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.youtube.com/watch?v=Q_akngSJVrQ"
                    )
                  }
                >
                  <Text
                    style={{
                      marginTop: 5,
                      color: color.gray,
                      ...fonts.body4,
                    }}
                  >
                    Watch the youtube video here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListFooterComponent={RenderInstructions}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={renderIngredients}
      />
      {renderHeaderBar()}
    </View>
  );
}
