import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
  Image,
} from "react-native";
import MealCard from "../../components/CategoryCard";
import RecentCard from "../../components/RecentCard";
import category from "../../interfaces/category";
import meal from "../../interfaces/meal";
import color from "../../styling/color";
import fonts from "../../styling/fonts";
import sizes from "../../styling/sizes";
import icons from "../../styling/icons";
import images from "../../styling/images";

export default () => {
  const testmeals: meal[] = [
    {
      idMeal: "52940",
      strMeal: "Brown Stew Chicken",
      strDrinkAlternate: null,
      strCategory: "Chicken",
      strArea: "Jamaican",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
      strTags: "Stew",
      strYoutube: "https://www.youtube.com/watch?v=_gFB1fkNhXs",
    },
    {
      idMeal: "52876",
      strMeal: "Minced Beef Pie",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "British",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
      strTags: "Pie,Meat",
      strYoutube: "https://www.youtube.com/watch?v=QY47h-uqq5g",
    },
    {
      idMeal: "52967",
      strMeal: "Home-made Mandazi",
      strDrinkAlternate: null,
      strCategory: "Breakfast",
      strArea: "Kenyan",
      strTags: "Baking,Breakfast,Egg,Warm,Snack",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
      strYoutube: "",
    },
  ];
  const testcategories: category[] = [
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
      strCategoryDescription:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      strCategoryDescription:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "General foods that don't fit into another category",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    },
    {
      idCategory: "7",
      strCategory: "Pork",
      strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      strCategoryDescription:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    },
    {
      idCategory: "8",
      strCategory: "Seafood",
      strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
      strCategoryDescription:
        'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      strCategoryDescription:
        "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      strCategoryDescription:
        "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      strCategoryDescription:
        "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
    },
    {
      idCategory: "12",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
      strCategoryDescription:
        "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
      strCategoryDescription:
        'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    },
    {
      idCategory: "14",
      strCategory: "Goat",
      strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",
      strCategoryDescription:
        "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
    },
  ];

  const renderCategory = ({ item }: { item: category }) => {
    const c: category = {
      idCategory: item.idCategory,
      strCategory: item.strCategory,
      strCategoryThumb: item.strCategoryThumb,
      strCategoryDescription: item.strCategoryDescription,
    };
    return (
      <MealCard
        categoryItem={c}
        containerStyle={{ marginHorizontal: sizes.padding }}
      />
    );
  };

  const renderRecentMeal = ({ item }: { item: meal }) => {
    const m: meal = {
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
    return (
      <RecentCard
        mealItem={m}
        containerStyle={{ marginHorizontal: sizes.padding }}
      />
    );
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: sizes.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: color.darkGreen, ...fonts.h2 }}>
            Hello Chef
          </Text>
          <Text style={{ marginTop: 3, color: color.gray, ...fonts.body3 }}>
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.avatar}
            style={{ width: 60, height: 60, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecent() {
    return (
      <View style={{ marginTop: sizes.padding }}>
        <Text style={{ marginHorizontal: sizes.padding, ...fonts.h2 }}>
          Recently added
        </Text>
        <FlatList
          data={testmeals}
          keyExtractor={(item) => `${item.idMeal}`}
          horizontal
          showsVerticalScrollIndicator={false}
          renderItem={renderRecentMeal}
        ></FlatList>
      </View>
    );
  }

  function renderRandomRecipeCard() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: sizes.padding,
          marginHorizontal: sizes.padding,
          borderRadius: 10,
          backgroundColor: color.lightGreen,
        }}
      >
        <View
          style={{ width: 100, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={images.recipe}
            style={{ margin: 5, width: 75, height: 75 }}
          />
        </View>
        <View style={{ flex: 1, paddingVertical: sizes.radius }}>
          <Text style={{ width: "70%", ...fonts.body4 }}>
            Want to try out something new & random?
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => console.log("Ok")}
          >
            <Text
              style={{
                color: color.darkGreen,
                textDecorationLine: "underline",
                ...fonts.h4,
              }}
            >
              Random Recipe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: sizes.padding,
        }}
      >
        <Text style={{ flex: 1, ...fonts.h2 }}>Categories</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <FlatList
        data={testcategories}
        keyExtractor={(item) => `${item.idCategory}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderRandomRecipeCard()}
            {renderRecent()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={renderCategory}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  );
};
