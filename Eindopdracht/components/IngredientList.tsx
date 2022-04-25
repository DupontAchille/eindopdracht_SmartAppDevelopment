import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../styling/fonts";
import icons from "../styling/icons";
import sizes from "../styling/sizes";

export default ({
  containerStyle,
  ingredientItem,
  onPress,
}: {
  containerStyle?: any;
  ingredientItem: any;
  onPress?: any;
}) => {
  return (
    <SafeAreaView style={{ marginTop: -40 }}>
      <View style={{ marginLeft: 32, paddingBottom: 5 }}>
        <Text style={{ ...fonts.h2 }}>Ingredient list</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient1 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient1}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure1}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient2 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient2}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure2}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient3 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient3}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure3}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient4 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient4}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure4}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient5 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient5}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure5}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient6 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient6}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure6}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient7 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient7}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure7}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient8 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient8}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure8}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient9 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient9}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure9}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient10 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient10}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure10}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient11 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient11}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure11}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient12 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient12}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure12}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient13 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient13}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure13}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient14 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient14}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure14}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient15 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient15}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure15}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient16 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient16}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure16}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient17 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient17}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure17}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient18 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient18}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure18}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient19 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient19}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure19}</Text>
            </View>
          </View>
        ) : null}
        {/* 1 Ingredient string */}
        {ingredientItem.strIngredient20 ? (
          <View style={styles.Row}>
            <View style={styles.Icon}>
              <Image source={icons.circle} style={{ width: 8, height: 8 }} />
            </View>
            <View style={styles.IngredientAlign}>
              <Text style={styles.Text}>{ingredientItem.strIngredient20}</Text>
            </View>
            <View style={styles.MeasureAlign}>
              <Text style={styles.Text}>{ingredientItem.strMeasure20}</Text>
            </View>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: "row",
    marginVertical: 5,
    width: "50%",
    left: 20,
  },
  Icon: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
  IngredientAlign: {
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  MeasureAlign: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  Text: {
    ...fonts.body3,
  },
});
