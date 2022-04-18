import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "../../styling/color";
import Recipe from "../Recipe";
import icons from "../../styling/icons";
import { Home } from "lucide-react";
import TabIcon from "../../components/TabIcon";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: color.white,
          borderTopColor: "transparent",
          height: 100,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Recipe}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Recipe}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Recipe}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bookmarkFilled} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
