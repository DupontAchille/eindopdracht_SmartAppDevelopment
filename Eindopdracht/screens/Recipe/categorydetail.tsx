import axios, { AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  FlatList,
} from "react-native";
import meal, { OneMeal } from "../../interfaces/meal";
import fonts from "../../styling/fonts";
import color from "../../styling/color";
import icons from "../../styling/icons";
import IngredientList from "../../components/IngredientList";
import sizes from "../../styling/sizes";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OneCategorie, OneCategorieDetail } from "../../interfaces/category";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryMealList from "../../components/CategoryMealList";
import { StatusBar } from "expo-status-bar";

export default function CategoryDetail({ route, navigation }: any) {
  const { payload } = route.params;

  const [onecategory, setOneCategoryData] = useState<OneCategorie>();
  useEffect(() => {
    axios
      .get<OneCategorie>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${payload}`
      )
      .then((response: AxiosResponse) => {
        setOneCategoryData(response.data);
        console.log(response.data);
        console.log(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${payload}`
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const renderCategoryMeals = ({ item }: { item: OneCategorieDetail }) => {
    const c: OneCategorieDetail = {
      idMeal: item.idMeal,
      strMeal: item.strMeal,
      strMealThumb: item.strMealThumb,
    };
    return (
      <CategoryMealList
        categoryMealItem={c}
        containerStyle={{
          flex: 1,
        }}
      />
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: color.white, alignItems: "center" }}
    >
      <StatusBar style="dark" />
      <FlatList
        data={onecategory?.meals}
        keyExtractor={(item) => `${item.idMeal}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryMeals}
        ListFooterComponent={<View style={{ marginBottom: 50 }}></View>}
      />
    </SafeAreaView>
  );
}
